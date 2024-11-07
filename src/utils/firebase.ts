import { appState } from '../store';

let db: any;
let auth: any;
let storage: any;

export const getFirebaseInstance = async () => {
	if (!db) {
		const { initializeApp } = await import('firebase/app');
		const { getFirestore } = await import('firebase/firestore');
		const { getAuth } = await import('firebase/auth');
		const { getStorage } = await import('firebase/storage');

		const firebaseConfig = {
			apiKey: 'AIzaSyDdeXwNTkI8lHfmjLFhtC4FbJvfGKIr9_s',
			authDomain: 'apps-reto1.firebaseapp.com',
			databaseURL: 'https://apps-reto1.firebaseio.com',
			projectId: 'apps-reto1',
			storageBucket: 'apps-reto1.appspot.com',
			messagingSenderId: '470696037037',
			appId: '1:470696037037:web:6de930ceb2df9d14ddd424',
			measurementId: 'G-G9ELH58HS7',
		};

		const app = initializeApp(firebaseConfig);
		db = getFirestore(app);
		auth = getAuth(app);
		storage = getStorage();
	}
	return { db, auth, storage };
};

//Crear contenido

export const addProduct = async (product: any) => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const registerProduct = {
			name: product.name,
			price: product.price,
			userUid: appState.user,
		};
		await addDoc(where, registerProduct);
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getProducts = async () => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'products');
		const querySnapshot = await getDocs(where);
		const data: any[] = [];

		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

		return data;
	} catch (error) {
		console.error('Error getting documents', error);
	}
};

//Auth

export const registerUser = async (credentials: any) => {
	try {
		const { auth, db } = await getFirebaseInstance();
		const { createUserWithEmailAndPassword } = await import('firebase/auth');
		const { doc, setDoc } = await import('firebase/firestore');

		const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

		const where = doc(db, 'users', userCredential.user.uid);
		const data = {
			age: credentials.age,
			name: credentials.name,
		};

		await setDoc(where, data);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export const loginUser = async (email: string, password: string) => {
	try {
		const { auth } = await getFirebaseInstance();
		const { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } = await import('firebase/auth');

		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, password);
			})
			.catch((error: any) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	} catch (error) {
		console.error(error);
	}
};

//Perfil

export const uploadFile = async (file: File, id: string) => {
	const { storage } = await getFirebaseInstance();
	const { ref, uploadBytes } = await import('firebase/storage');

	const storageRef = ref(storage, 'imagesProfile/' + id);
	uploadBytes(storageRef, file).then((snapshot) => {
		console.log('File uploaded');
	});
};

export const getFile = async (id: string) => {
	const { storage } = await getFirebaseInstance();
	const { ref, getDownloadURL } = await import('firebase/storage');

	const storageRef = ref(storage, 'imagesProfile/' + id);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});

	return urlImg;
};

export const getProductsByUser = async () => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs, query, where } = await import('firebase/firestore');

		const ref = collection(db, 'products');
		const q = query(ref, where('userUid', '==', appState.user));
		const querySnapshot = await getDocs(q);
		const data: any[] = [];

		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

		return data;
	} catch (error) {
		console.error('Error getting documents', error);
	}
};
