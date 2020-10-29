import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBUscziLch2womlfgV7PsH-AFuWTNcV57g",
    authDomain: "tesetprojeto.firebaseapp.com",
    databaseURL: "https://tesetprojeto.firebaseio.com",
    projectId: "tesetprojeto",
    storageBucket: "tesetprojeto.appspot.com",
    messagingSenderId: "397730370591",
    appId: "1:397730370591:web:15c7891ca45f818b3ef12a"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;