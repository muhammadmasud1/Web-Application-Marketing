import { Link } from "react-router-dom";
import style from "../Styles/Background.module.css";

const Register = () => {
              return (
                <div>
                  <div className={style.background}>
                    <div className=" h-screen w-full flex justify-center items-center">
                      <div className="bg-[#e31414] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
                        <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
                          <h1 className="text-3xl">Enjoy </h1>
                          <p className="text-5xl font-extrabold">Our Service</p>
                        </div>
                        <div className="bg-white w-full   md:w-1/2 flex flex-col items-center py-16 px-8">
                          <h3 className="text-3xl font-bold text-[#e31414] mb-4">
                            Register
                          </h3>
                          <form
                            action="#"
                            className="w-full flex flex-col justify-center"
                          >
                            <div className="mb-4">
                              <input
                                type="text"
                                placeholder="Name"
                                className="required mb-4 appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                              />
                              <div >
                                <input
                                  type="number"  name="number"
                                  placeholder="Number"
                                  className="required mb-4 appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                                />
                              </div>
                              <div >
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                                />
                              </div>
                            </div>
                            <div className="mb-5">
                              <input
                                type="password"
                                placeholder="Password"
                                className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                              />
                            </div>
                            <Link to="/login">
                              <div className="flex mb-5 justify-center items-center text-red-600">
                                <button className={style.originalButton1}>
                                  Submit
                                </button>
                              </div>
                            </Link>
                            <div>
                              <p className="text-black text-center ">
                                Already have an account?{" "}
                                <Link
                                  className="text-red-600 font-semibold"
                                  to="/login"
                                >
                                  {" "}
                                  Login
                                </Link>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Register;