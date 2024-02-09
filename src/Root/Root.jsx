import { Outlet } from "react-router-dom";
import Nav from "../component/Header/Nav";
import Footer from "../component/Footer/Footer";
import AuthCustom from "../component/Custom Hook/AuthCustom";
import Loading from "../component/Loading/Loading";


const Root = () => {
        const {loading} = AuthCustom()

         if(loading) {
          return <Loading></Loading>
         }
              return (
                <div>
                  <Nav></Nav>
                  <Outlet></Outlet>
                  <Footer></Footer>
                </div>
              );
};

export default Root;