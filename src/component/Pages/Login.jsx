import { Link } from 'react-router-dom';
import style from '../Styles/Background.module.css'
import { FaGithub } from "react-icons/fa";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../googleFirebase';
import { GoogleAuthProvider } from "firebase/auth";






const Login = () => {
            const auth = getAuth(app);
            const provider = new GoogleAuthProvider();

       const googleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
          console.log(result.user)
        }).catch((error => {
          console.log(error.message)
        }))
        
       }
       
              return (
                <div className={style.background}>
                  <div className=" h-screen w-full flex justify-center items-center">
                    <div className="bg-[#e31414] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
                      <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
                        <h1 className="text-3xl">Hello</h1>
                        <p className="text-5xl font-extrabold">Welcome!</p>
                      </div>
                      <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-16 px-8">
                        <h3 className="text-3xl font-bold text-[#e31414] mb-4">
                          LOGIN
                        </h3>
                        <form
                          action="#"
                          className="w-full flex flex-col justify-center"
                        >
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
                              <p className="text-red-600 px-1">
                                Forget Password
                              </p>
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
                          <div className="text-center  ">
                            <div className="flex items-center justify-center bg-red-600 rounded-lg ">
                              <Link to="/">
                                <button
                                  onClick={googleLogin}
                                  className="flex items-center justify-center gap-4 py-3"
                                >
                                  <span className="text-[30px] text-white">
                                    <FaGithub />
                                  </span>
                                  <h3 className="font-semibold">
                                    Login With Google
                                  </h3>
                                </button>
                              </Link>
                            </div>
                            <div className="flex items-center justify-center bg-red-600 rounded-lg my-3 ">
                              <button className="flex items-center justify-center gap-4 py-3">
                                <span className="text-[30px] text-white">
                                  <FaGithub />
                                </span>
                                <h3 className="font-semibold">
                                  Login With Facebook
                                </h3>
                              </button>
                            </div>
                          </div>
                          <div>
                            <p className="text-black text-center ">
                              Not a member?{" "}
                              <Link
                                className="text-red-600 font-semibold"
                                to="/register"
                              >
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