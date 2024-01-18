
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUiiXWCw5RDJqQqGrxJmUfkHHsDQokZ3c",
  authDomain: "concpets-2570c.firebaseapp.com",
  projectId: "concpets-2570c",
  storageBucket: "concpets-2570c.appspot.com",
  messagingSenderId: "934931763309",
  appId: "1:934931763309:web:26aeecf37be5855377af64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
