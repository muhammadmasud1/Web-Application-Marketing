
import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4sec-cjZKX6uo36xhje6HP5BR3zUgZiI",
  authDomain: "concepts-34357.firebaseapp.com",
  projectId: "concepts-34357",
  storageBucket: "concepts-34357.appspot.com",
  messagingSenderId: "766673703526",
  appId: "1:766673703526:web:0cc22a50c4f839448493a7",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();



