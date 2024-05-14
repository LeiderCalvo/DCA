import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; //Importar los modulos
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, doc, setDoc, getDoc, where, query } from 'firebase/firestore'; //Importar funciones para agregar info a la db
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Product } from '../types/products';

const firebaseConfig = {
	apiKey: 'AIzaSyD-HYIh8x0onCBChk1wlSDlWIeSUdaFXNM',
	authDomain: 'dcatest-2ee5f.firebaseapp.com',
	projectId: 'dcatest-2ee5f',
	storageBucket: 'dcatest-2ee5f.appspot.com',
	messagingSenderId: '634779052994',
	appId: '1:634779052994:web:e23d3ec2eb58c9d2f6045b',
	measurementId: 'G-V8GF33RZ1M',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage();

//Funciones para loguear y registrar
export const createUser = (formData: any) => {
	createUserWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			console.log(user.uid);

			//Segundo paso es agregar un documento con más info bajo ese id
			try {
				const where = doc(db, 'users', user.uid);
				const data = {
					age: formData.age,
				};
				await setDoc(where, data);
				alert('Se creó el usuario');
			} catch (error) {
				console.error(error);
			}
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
		});
};

export const logIn = (formData: any) => {
	signInWithEmailAndPassword(auth, formData.email, formData.password)
		.then(async (userCredential) => {
			//Primer paso es obtener el id
			const user = userCredential.user;
			console.log(user.uid);
		})
		.catch((error: any) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(errorCode, errorMessage);
		});
};

//Funciones para agregar y obtener productos
export const addPost = async (formData: Omit<Product, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'posts'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPosts = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const arrayProducts: Array<Product> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};

export const getPostsProfile = async (idUser: string) => {
	const q = query(collection(db, 'posts'), where('idUser', '==', idUser));
	const querySnapshot = await getDocs(q);
	const arrayProducts: Array<Product> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};

//Función para obtener especificamente un solo documento
export const getDetailDoc = async (id: string) => {
	const docRef = doc(db, 'movies', id);
	const docSnap = await getDoc(docRef);
	return docSnap.data();
};

export const uploadFile = async (file: File, id: string) => {
	const storageRef = ref(storage, 'imgsProfile/' + id);
	uploadBytes(storageRef, file).then((snapshot) => {
		console.log('Uploaded a blob or file!');
	});
};

export const getFile = async (id: string) => {
	const storageRef = ref(storage, 'imgsProfile/' + id);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});
	return urlImg;
};

// // Firebase
// export const updateFavoriteSong = async (newSong) =>{
// 	const userRef = doc(db, "users", "MbI0NMs496BhH71Jf29Z");

// 	await updateDoc(userRef, {
// 		favoriteSong: newSong
// 	});
// }

// //Donde esté el boton para cambiar la canción
// button.addEventListener('click', async ()=>{
// 	updateFavoriteSong("Quevedo - blabla")
// })
