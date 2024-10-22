let db: any;
let auth: any;

const getFirebaseInstance = async () => {
	if (!db) {
		const { getFirestore } = await import('firebase/firestore');
		const { initializeApp } = await import('firebase/app');
		const { getAuth } = await import('firebase/auth');

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
	}
	return { db, auth };
};

export const addProduct = async (product: any) => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'products');
		await addDoc(where, product);
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

export const registerUser = async (email: string, password: string) => {
	try {
		const { auth } = await getFirebaseInstance();
		const { createUserWithEmailAndPassword } = await import('firebase/auth');

		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		console.log(userCredential.user);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
