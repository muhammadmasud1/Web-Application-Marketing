import { Outlet } from "react-router-dom";
import Nav from "../component/Header/Nav";
import Footer from "../component/Footer/Footer";


const Root = () => {
              return (
                <div>
                  <Nav></Nav>
                  <Outlet></Outlet>
                  <Footer></Footer>
                </div>
              );
};

export default Root;