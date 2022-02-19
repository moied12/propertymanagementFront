import firebase from "firebase/compat/app"
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC_SsPA22KCWCTlGxt__-b2FpiZIMvi12g",
    authDomain: "adel-4c01f.firebaseapp.com",
    projectId: "adel-4c01f",
    storageBucket: "adel-4c01f.appspot.com",
    messagingSenderId: "614682293787",
    appId: "1:614682293787:web:b9e95cf44788a433b86abe",
    measurementId: "G-XMQLK3FQND"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export {storage, firebase as default};