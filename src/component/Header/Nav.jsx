
import styles from '../Styles/Background.module.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthCustom from '../Custom Hook/AuthCustom';

const Nav = () => {
        
          const [nav,setNav] = useState([])
          const { user, handleLogOut } = AuthCustom();
           const navigate = useNavigate()
          useEffect(()=> {
            fetch('/navInfo.json')
            .then(res => res.json())
            .then(data => setNav(data))
          },[])
         
          const logOut = () =>{
            console.log(" click");
            handleLogOut()
            .then((result) => {
              console.log(result.user)
              navigate('/login')
            }).catch((error) => {
              console.log(error.message)
            })
          }
            
      

              return (
                <div className={styles.background}>
                  <div className="max-w-7xl mx-auto">
                    <div className="navbar">
                      <div className="navbar-start">
                        <div className="dropdown">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                              />
                            </svg>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu z-50 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
                          >
                            {nav?.map((item) => (
                              <li
                                className="text-[18px] font-semibold"
                                key={item.id}
                              >
                                <Link to={item.link}>{item.navName}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">
                          <Link to={"/"}>Web Application</Link>
                        </a>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal">
                          {nav?.map((item) => (
                            <li
                              className="text-[18px] font-semibold"
                              key={item.id}
                            >
                              <Link to={item.link}>{item.navName}</Link>
                            </li>
                          ))}
                          {user && (
                            <li className="text-[18px] font-semibold">
                              <Link to={"/dashboard"}>Dashboard</Link>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="navbar-end">
                        {user ? (
                          <div className="dropdown dropdown-end z-50">
                            <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost btn-circle avatar"
                            >
                              <div className="w-10 rounded-full">
                                <img
                                  alt="User Photo"
                                  src={user ? user?.photoURL : ""}
                                />
                              </div>
                            </div>
                            <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
                            >
                              <li>
                                <a className="justify-between">
                                  <Link to={"/profile"}>Profile</Link>
                                  <span className="badge">New</span>
                                </a>
                              </li>
                              <li>
                                <a>Settings</a>
                              </li>
                              <li>
                                <Link>
                                  <a onClick={logOut}>Logout</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <button className="btn btn-primary btn-sm">
                            <Link to={"/login"}>Sign In</Link>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Nav;