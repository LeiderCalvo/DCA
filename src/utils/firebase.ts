import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { Post } from '../types/post';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-HYIh8x0onCBChk1wlSDlWIeSUdaFXNM",
  authDomain: "dcatest-2ee5f.firebaseapp.com",
  projectId: "dcatest-2ee5f",
  storageBucket: "dcatest-2ee5f.appspot.com",
  messagingSenderId: "634779052994",
  appId: "1:634779052994:web:e23d3ec2eb58c9d2f6045b",
  measurementId: "G-V8GF33RZ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

//Database

const addPosts = async (post: Omit<Post,"id">) => {
  try {
    const where = collection(db, "posts");
    await addDoc(where,post);
    console.log("Se añadió")
  } catch (error) {
    console.error(error);
  }
}

const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db,"posts"));
  const transformed: Array<Post> = [];

  querySnapshot.forEach((doc)=>{
    const data: Omit<Post,"id"> = doc.data() as any;
    transformed.push({
      id: doc.id, 
      ...data
    });
  })

  return transformed;
}


//Authentication

const createUser = async (email: string,password: string, name: string, age: number) => {
  //Primer paso: Crear usuario con auth
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    console.log(userCredential.user);
    //Segundo paso: Agregar la info restante a la db con el id del usuario
    const where = doc(db, "users", userCredential.user.uid);
    const data = {
      name: name,
      age: age
    }
    await setDoc(where, data);
    //Tercer paso: Retornar true para dejarlo pasar de pantalla
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    alert("Vuelve a intentarlo");
    return false;
  }
}

const logIn = async (email: string, password: string) => {
  setPersistence(auth,browserLocalPersistence).then(() =>{
    return signInWithEmailAndPassword(auth,email,password);
  }).catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage);
  })

  //Nota: El codigo de abajo sirve para pasar de pantallas con el auth sin persistencia

  // try {
  //   const userCredential = await signInWithEmailAndPassword(auth,email, password);
  //   console.log(userCredential.user);
  //   alert("Bienvenido " + userCredential.user.email);
  //   return true;
  // } catch (error:any) {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.error(errorMessage);
  //   return false;
  // }
}

export default {
  addPosts,
  getPosts,
  createUser,
  logIn
}