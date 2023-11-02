import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { Post } from '../types/post';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

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
const auth = getAuth(app);

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


const createUser = async (email: string,password: string, name: string, age: number) => {
  //Primer paso: Crear usuario con auth
  createUserWithEmailAndPassword(auth,email,password).then(async (userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    //Segundo paso: Crear datos del usuario en la 
    //colección users
    try {
      const where = doc(db, "users", user.uid);
      const data = {
        name: name,
        age: age
      }
      await setDoc(where, data);
      console.log("Se añadió")
    } catch (error) {
      console.error(error);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth,email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });
}

export default {
  addPosts,
  getPosts,
  createUser,
  logIn
}