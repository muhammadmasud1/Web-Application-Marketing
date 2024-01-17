import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/Background.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import app from "../../googleFirebase";
import { auth as fbAuth } from "../../fbFirebase";
import { auth as githubAuth } from "../../githubFirebase";

const Login = () => {
  const googleAuth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookAuth = getAuth();
  const facebookProvider = new FacebookAuthProvider();
  const githubAuth = getAuth();

  // State for user
  const [user, setUser] = useState(null);
  console.log(user);

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

  // GitHub login function
  const githubLogin = () => {
    signInWithPopup(githubAuth, new GithubAuthProvider())
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
                    className="text-center max-w-28 inline-flex justify-center items-center rounded-full my-3"
                    src={user.photoURL}
                    alt=""
                  />
                  <h1 className="text-2xl"> {user.displayName}</h1>
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
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-full h-1 bg-red-800"></div>
                  <h4 className="text-red-500">OR</h4>
                  <div className="w-full h-1 bg-red-800"></div>
                </div>
                <div className="flex items-center justify-center gap-4 my-5 ">
                  <button
                    onClick={googleLogin}
                    className="text-red-600 text-[25px] hover:scale-105 transition-all hover:text-fuchsia-500"
                  >
                    <span>
                      <FaGoogle></FaGoogle>
                    </span>
                  </button>
                  <button
                    onClick={facebookLogin}
                    className="text-red-600 text-[25px] hover:scale-105 transition-all hover:text-fuchsia-500"
                  >
                    <span>
                      <FaFacebook></FaFacebook>
                    </span>
                  </button>
                  <button
                    onClick={githubLogin}
                    className="text-red-600 text-[25px] hover:scale-105 transition-all hover:text-fuchsia-500"
                  >
                    <span>
                      <FaGithub></FaGithub>
                    </span>
                  </button>
                  <button className="text-red-600 text-[25px] hover:scale-105 transition-all hover:text-fuchsia-500">
                    <span>
                      <FaInstagram></FaInstagram>
                    </span>
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
