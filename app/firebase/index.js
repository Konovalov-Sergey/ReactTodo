import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyCSBARUE_eTihya9xmTJwPMAIh7mrxeMdY",
		authDomain: "todo-app-8f38f.firebaseapp.com",
		databaseURL: "https://todo-app-8f38f.firebaseio.com",
		storageBucket: "todo-app-8f38f.appspot.com",
		messagingSenderId: "1093827698977"
	};
	
	firebase.initializeApp(config);
} catch (e) {
	
}


export var firebaseRef = firebase.database().ref();

export default firebase;