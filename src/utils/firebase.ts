import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Product } from "../types/products";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addProduct = async (product: Omit<Product, "id">) => {
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
};

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });
