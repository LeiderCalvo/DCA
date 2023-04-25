import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocs, collection, setDoc } from 'firebase/firestore/lite';

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

const citiesRef = collection(db, 'test');
setDoc(doc(citiesRef, 'SF'), {
	name: 'San Francisco',
	state: 'CA',
	country: 'USA',
	capital: false,
	population: 860000,
	regions: ['west_coast', 'norcal'],
});

const docRef = collection(db, 'test');
const querySnapshot = await getDocs(docRef);

querySnapshot.forEach((doc) => {
	// doc.data() is never undefined for query doc snapshots
	console.log(doc.id, ' => ', doc.data());
});
