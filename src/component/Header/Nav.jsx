import { NavLink } from 'react-router-dom';
import styles from '../Styles/Background.module.css'
const Nav = () => {
          
              const navLinks = (
                <>
                  <li className="text-xl text-white">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b border-b-red-600 outline-none"
                          : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="text-xl text-white">
                    <NavLink
                      to="/post"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b border-b-red-600 outline-none"
                          : ""
                      }
                    >
                      Post
                    </NavLink>
                  </li>
                  <li className="text-xl text-white">
                    <NavLink
                      to="/service"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b border-b-red-600 outline-none"
                          : ""
                      }
                    >
                      Service
                    </NavLink>
                  </li>
                  <li className="text-xl text-white">
                    <NavLink
                      to="/about"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b border-b-red-600 outline-none"
                          : ""
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink
                      to="/contact"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b border-b-red-600 outline-none"
                          : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </>
              );
              



              return (
                <div className={styles.background}>
                  <div className="max-w-7xl mx-auto">
                    <div className="navbar ">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            {navLinks}
                          </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl">
                          <span className={styles.text}>
                            Eleventor Concepts
                          </span>
                        </a>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                          {navLinks}
                        </ul>
                      </div>
                      <div className="navbar-end">
                        <button className={styles.originalButton}>Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Nav;