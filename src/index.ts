import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

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
const auth = getAuth(app);

//Register new user
createUserWithEmailAndPassword(auth, 'juanez1999@gmail.com', '1234567')
.then((userCredential:any) => {
	// Signed in
	const user = userCredential.user;
	console.log(user);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	console.log(errorMessage);
	// ..
});

//Login user
signInWithEmailAndPassword(auth, 'juanez1999@gmail.com', '1234567')
.then((userCredential:any) => {
	// Signed in
	const user2 = userCredential.user;
	console.log(user2);
	// ...
})
.catch((error:any) => {
	const errorCode = error.code;
	const errorMessage = error.message;
});

// sendPasswordResetEmail(auth, 'juanez1999@gmail.com')
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error:any) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//Information about the user who accessed
onAuthStateChanged(auth, (user:any) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		console.log(uid);
		// ...
	} else {
		// User is signed out
		// ...
	}
});
