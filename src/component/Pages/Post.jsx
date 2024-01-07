import { useLocation } from "react-router-dom";
import Featurepost from "./Featurepost";

const Post = () => {

   const location = useLocation()
    const pathLocation = location.pathname;
  return (
    <>
    <Featurepost pathLocation={pathLocation}></Featurepost>
    </>
  )
};

export default Post;
