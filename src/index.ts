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

const addUser = async () => {
	try {
		const docRef = await addDoc(collection(db, 'test'), {
			first: 'Ada',
			last: 'Lovelace',
			born: 1815,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

// addUser();

const getUsers = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	querySnapshot.forEach((doc) => {
		console.log(doc.data());
	});
};

getUsers();
