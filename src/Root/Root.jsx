import { Outlet } from "react-router-dom";
import Nav from "../component/Header/Nav";

const Root = () => {
              return (
                <div>
                  <Nav></Nav>
                  <Outlet></Outlet>
                </div>
              );
};

export default Root;