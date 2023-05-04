import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Product } from "../types/products";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    alert("welcome " + userCredential.user.email);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

/////////////////////// DB
const db = getFirestore(app);

const addProduct = async (product: Omit<Product, "id">) => {
  try {
    const where = collection(db, "products");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const transformed: Array<Product> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Product, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

export default {
  addProduct,
  getProducts,
  registerUser,
  loginUser,
};
