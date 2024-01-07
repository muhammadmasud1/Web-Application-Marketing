import { Link } from 'react-router-dom';
import style from '../Styles/Background.module.css'
const Login = () => {
              return (
                <div className={style.background}>
                  <div className=" h-screen w-full flex justify-center items-center">
                    <div className="bg-[#e31414] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
                      <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
                        <h1 className="text-3xl">Hello</h1>
                        <p className="text-5xl font-extrabold">Welcome!</p>
                      </div>
                      <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
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
                              <p className="text-red-600 px-1">Forget Password</p>
                            </Link>
                          </div>
                          <Link to="/">
                            <div className="flex mb-5 justify-center items-center text-red-600">
                              <button className={style.originalButton1}>
                                Submit
                              </button>
                            </div>
                          </Link>
                          <div>
                            <p className='text-black text-center '>Not a member? <Link className='text-red-600 font-semibold' to='/register'> SignUp Now</Link></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Login;