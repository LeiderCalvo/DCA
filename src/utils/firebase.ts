import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { Product } from "../types/products";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const uploadFile = async (file: string) => {
  const storageRef = ref(storage, "imgs/cat.jpg");
  const res = await uploadString(storageRef, file);
  console.log("Uploaded a blob or file!", res);
};

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

const getProductsListener = (cb: (docs: Product[]) => void) => {
  const ref = collection(db, "products");
  //  const unsub =
  onSnapshot(ref, (collection) => {
    const docs: Product[] = collection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    cb(docs);
  });
};

export default {
  addProduct,
  getProducts,
  getProductsListener,
  uploadFile,
};

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });
