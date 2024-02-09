import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const AuthCustom = () => {
             const authInfo = useContext(authContext)
             return authInfo
};

export default AuthCustom;