// Import necessary modules and components
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Background.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../googleFirebase"; 
import { auth } from "../../fbFirebase"; 
const Login = () => {
  const googleAuth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const facebookAuth = getAuth(); 
  const facebookProvider = new FacebookAuthProvider();

  // State for user
  const [user, setUser] = useState(null);
 console.log(user)
  // Google login function
  const googleLogin = () => {
    signInWithPopup(googleAuth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Facebook login function
  const facebookLogin = () => {
    signInWithPopup(facebookAuth, facebookProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={style.background}>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="bg-[#e31414] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
            <div className="text-center">
              {user ? (
                <>
                  <img
                    className="text-center inline-flex justify-center items-center rounded-full my-3"
                    src={user.photoURL}
                    alt=""
                  />
                  <h1 className="text-3xl"> {user.displayName}</h1>
                  <p className="text-5xl font-extrabold">Welcome!</p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl">User Name</h1>
                  <p className="text-5xl font-extrabold">Welcome!</p>
                </>
              )}
            </div>
          </div>
          <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-16 px-8">
            <h3 className="text-3xl font-bold text-[#e31414] mb-4">LOGIN</h3>
            <form action="#" className="w-full flex flex-col justify-center">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                />
                <Link>
                  <p className="text-red-600 px-1">Forget Password</p>
                </Link>
              </div>
              <Link to="/">
                <div className="flex mb-5 justify-center items-center text-red-600">
                  <button
                    /*     onClick={signInWithGoogle} */
                    className={style.originalButton1}
                  >
                    Submit
                  </button>
                </div>
              </Link>
              <div className="text-center">
                <div className="flex items-center justify-center bg-red-600 rounded-lg">
                  <button
                    onClick={googleLogin}
                    className="flex items-center justify-center gap-4 py-2"
                  >
                    <span className="text-[30px] text-white">
                      <FaGoogle></FaGoogle>
                    </span>
                    <h3 className="font-semibold">Login With Google</h3>
                  </button>
                </div>

                <div
                  onClick={facebookLogin}
                  className="flex items-center justify-center bg-red-600 rounded-lg my-3"
                >
                  <button className="flex items-center justify-center gap-4 py-2">
                    <span className="text-[30px] text-white">
                      <FaFacebook></FaFacebook>
                    </span>
                    <h3 className="font-semibold">Login With Facebook</h3>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-black text-center ">
                  Not a member?{" "}
                  <Link className="text-red-600 font-semibold" to="/register">
                    {" "}
                    SignUp Now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
