import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "../Styles/Background.module.css";
const Footer = () => {
  return (
    <div className={style.background}>
      <footer className="footer  border-t-2 border-white footer-center p-10 text-white   rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about">
            <a className="link link-hover">About us</a>
          </Link>
          <Link to="/contact">
            <a className="link link-hover">Contact</a>
          </Link>
          <Link to="/post">
            <a className="link link-hover">Member</a>
          </Link>
          <Link to="/service">
            <a className="link link-hover">Service</a>
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              className="text-3xl hover:scale-105 transition-all"
              href="https://www.facebook.com/profile.php?id=100020186948821"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="text-3xl  hover:scale-105 transition-all"
              href="javascript:void(0)"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-3xl  hover:scale-105 transition-all"
              href="https://github.com/muhammadmasud1"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Marketing Agency Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
