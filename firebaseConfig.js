import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBH5g-pVhxxQvfu55Gnr8RGr36bU9dm1Wg",
    authDomain: "satisfacao-411df.firebaseapp.com",
    projectId: "satisfacao-411df",
    storageBucket: "satisfacao-411df.appspot.com",
    messagingSenderId: "633076722182",
    appId: "1:633076722182:web:4bf46d79e956ed77a9b187",
    measurementId: "G-6M9GT0V277"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;