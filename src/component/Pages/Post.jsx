import { useLocation } from "react-router-dom";
import Featurepost from "./Featurepost";
import style from '../Styles/Background.module.css'
const Post = () => {

   const location = useLocation()
    const pathLocation = location.pathname;
  return (
    <>
    
      <Featurepost pathLocation={pathLocation}></Featurepost>
    </>
  );
};

export default Post;
