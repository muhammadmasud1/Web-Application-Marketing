import { useState } from "react";
import { Link, } from "react-router-dom";
import style from "../Styles/Background.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth
} from "firebase/auth";
import Swal from "sweetalert2";
import app from "../Firebase Process/firebaseKey";

const Login = () => {
  // State for user
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  
  const auth = getAuth(app)

  // Google Login Function
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Congratulations",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        if (!user) {
          setError(error.message);
        }
      });
  };

  // Facebook Login Function
  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // GitHub Login Function
  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Twitter Login Function
  const twitterLogin = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Form onSubmit Function
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

  /*   if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password at least one uppercase letter");
      return;
    }
     else if (!/[a-z]/.test(password)) {
      setError("Password at least one lowercase letter");
      return;
    }
     else if (!/[!,@,#,%,&]/.test(password)) {
      setError("Password at one Special letter");
      return;
    }
     else if (!/[0-9]/.test(password)) {
      setError("Password at one Number letter");
      return;
    } */

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message)
        Swal.fire({
          position: "center",
          icon: "error",
          title: "invalid Gmail or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Show/Hide Password
  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  // forget Password


const handleForgetPassword = async () => {
  const { value: email } = await Swal.fire({
    title: "Input email address",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address",
    showCancelButton: true,
  });

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password reset email sent!",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error sending reset email",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
};


  return (
    <div className={style.background}>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className=" w-full bg-red-600 sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div className="w-full md:w-1/2 hidden  md:flex flex-col justify-center items-center text-white ">
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
            <form
              onSubmit={handleForm}
              action="#"
              className="w-full flex flex-col justify-center form-control"
            >
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                />
              </div>
              <div className="mb-5">
                <div className="relative">
                  <input
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {passwordShow ? (
                      <span
                        onClick={handleShowPassword}
                        className="text-black z-10 text-[24px]"
                      >
                        <FaEyeSlash></FaEyeSlash>
                      </span>
                    ) : (
                      <span
                        onClick={handleShowPassword}
                        className="text-black z-10 text-[24px]"
                      >
                        <IoEyeSharp></IoEyeSharp>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center ">
                  <p className="text-red-600 px-1 cursor-pointer">{/* error */}</p>
                  <p
                    onClick={handleForgetPassword}
                    className="text-red-600 px-1 cursor-pointer"
                  >
                    Forget Password
                  </p>
                </div>
              </div>

              <div className="flex mb-5 justify-center items-center text-red-600">
                <button type="submit" className={style.originalButton1}>
                  Submit
                </button>
              </div>

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
                  <button
                    onClick={twitterLogin}
                    className="text-red-600 text-[25px] hover:scale-105 transition-all hover:text-fuchsia-500"
                  >
                    <span>
                      <FaTwitter></FaTwitter>
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
