import { Link } from "react-router-dom";
import style from "../Styles/Background.module.css";
import { authentication } from "../../twitterFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const password = event.target.password.value;
    const term = event.target.term.checked;
    /* console.log(name,email,number,password) */

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password at least one lowercase letter");
      return;
    } else if (!/[!,@,#,$,%]/.test(password)) {
      setError("Password at one Special letter");
      return;
    } else if(!/[0-9]/.test(password)){
      setError('Password at least one number letter')
    } else if (!term){
      setError('Click Term And Condition')
    }
    createUserWithEmailAndPassword(
      authentication,
      email,
      password,
      name,
      number
    )
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error)
        setError("Invalid email or password");
       
      });
  };

  // handle password icons

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className={style.background}>
        <div className=" h-screen w-full flex justify-center items-center">
          <div className="bg-[#e31414] w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
            <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
              <div>
                 <h1 className="text-center border-b-2 py-2 border-b-white text-[25px] text-white font-semibold mb-8">Enjoy our Service</h1>
                <div className="flex items-center text-center gap-2">
                  <span className="text-green-600 text-[16px]">
                    <FaCircleCheck></FaCircleCheck>
                  </span>
                  <p>Minimum Password at least 6 Character</p>
                </div>
                <div className="flex items-center text-center gap-2">
                  <span className="text-green-600 text-[16px]">
                    <FaCircleCheck></FaCircleCheck>
                  </span>
                  <p>Password at least one uppercase letter</p>
                </div>
                <div className="flex items-center text-center gap-2">
                  <span className="text-green-600 text-[16px]">
                    <FaCircleCheck></FaCircleCheck>
                  </span>
                  <p>Password at least one lowercase letter</p>
                </div>
                <div className="flex items-center text-center gap-2">
                  <span className="text-green-600 text-[16px]">
                    <FaCircleCheck></FaCircleCheck>
                  </span>
                  <p>Password at one Special letter</p>
                </div>
                <div className="flex items-center text-center gap-2">
                  <span className="text-green-600 text-[16px]">
                    <FaCircleCheck></FaCircleCheck>
                  </span>
                  <p>Password at one Number letter</p>
                </div>
              </div>

             
            </div>
            <div className="bg-white w-full   md:w-1/2 flex flex-col items-center py-16 px-8">
              <h3 className="text-3xl font-bold text-[#e31414] mb-4">
                Register
              </h3>
              <form
                onSubmit={handleRegisterForm}
                action="#"
                className="w-full flex flex-col justify-center"
              >
                <div className="mb-t">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="required mt-4 appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                  />
                  <div>
                    <input
                      type="number"
                      name="number"
                      placeholder="Number"
                      className="required mt-4 appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="required appearance-none w-full p-3 rounded border placeholder-black focus:outline-none text-black focus:border-red-600"
                    />

                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      {showPassword ? (
                        <span
                          onClick={handlePassword}
                          className="text-black z-10 text-[24px]"
                        >
                          <FaEyeSlash></FaEyeSlash>
                        </span>
                      ) : (
                        <span
                          onClick={handlePassword}
                          className="text-black z-10 text-[24px]"
                        >
                          <IoEyeSharp></IoEyeSharp>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="term" id="checkbox" />
                    <label className="text-black" htmlFor="checkbox">I agree a term Condition</label>
                  </div>
                </div>
                <div className="mb-5">
                  <p className=" text-red-600 font-semibold">{error}</p>
                </div>
                <div className="flex mb-5 justify-center items-center text-red-600">
                  <button type="submit" className={style.originalButton1}>
                    Submit
                  </button>
                </div>

                <div>
                  <p className="text-black text-center ">
                    Already have an account?{" "}
                    <Link className="text-red-600 font-semibold" to="/login">
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
