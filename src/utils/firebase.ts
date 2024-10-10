import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDdeXwNTkI8lHfmjLFhtC4FbJvfGKIr9_s',
	authDomain: 'apps-reto1.firebaseapp.com',
	databaseURL: 'https://apps-reto1.firebaseio.com',
	projectId: 'apps-reto1',
	storageBucket: 'apps-reto1.appspot.com',
	messagingSenderId: '470696037037',
	appId: '1:470696037037:web:bb70b5a3b1d74e11ddd424',
	measurementId: 'G-DRDDR7JWBM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addProduct = async (product: any) => {
	try {
		const where = collection(db, 'products');
		await addDoc(where, product);
		console.log('Se añadió con éxito');
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getProducts = async () => {
	const where = collection(db, 'products');
	const querySnapshot = await getDocs(where);
	const data: any[] = [];

	querySnapshot.forEach((doc) => {
		data.push(doc);
	});

	return data;
};
