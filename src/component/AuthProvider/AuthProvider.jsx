import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase Process/firebaseKey";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // create User
  const createUser = (email, password, number, name,photo) => {
    return createUserWithEmailAndPassword(auth, email, password, name, number,photo);
  };
  
  // current User State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unSubscribe;
  },[auth])

 // logOut User

 const handleLogOut = () => {
  signOut(auth)
 }

  const authInfo = { user, createUser, handleLogOut };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};
export default AuthProvider;
