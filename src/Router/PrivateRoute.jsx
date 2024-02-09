import { Navigate } from "react-router-dom";
import AuthCustom from "../component/Custom Hook/AuthCustom";
import Loading from "../component/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = AuthCustom();
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
