import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../Styles/Background.module.css";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () =>
  toast.success("Thanks For Love", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
const PostDetails = () => {
  const [dataPost, setDataPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/feature.json")
      .then((res) => res.json())
      .then((data) => setDataPost(data));
  }, []);
  const findData = dataPost.find((data) => data.id == id);
  // Check if findData exists before accessing its properties
  if (!findData) {
    return <p>Loading...</p>; // Add a loading indicator or handle the case differently
  }
  return (
    <div className={style.backgroundImages}>
      <div className="w-full h-screen ">
        <div className="flex justify-center px-6 items-center py-20">
          <div className={style.card}>
            <div className="card w-[390px]  px-5 shadow-xl">
              <figure>
                <img
                  className="rounded-full my-5 text w-36 h-36 object-cover"
                  src={findData.image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <div className="flex gap-1">
                  <h2 className="card-title text-white">{findData.name}</h2>
                  <MdVerified className="text-blue-500"></MdVerified>
                </div>
                <p className="text-gray-300">{findData.description}</p>
                <div className="flex items-center justify-center gap-1">
                  <IoMdTime className="text-white"></IoMdTime>
                  <p className="text-gray-300">{findData.time}</p>
                </div>
                <div className="card-actions justify-between my-5 items-center ">
                  <div>
                    <Link to={`/postDetails/${id}`}>
                      <button className="btn btn-outline btn-error">
                        <span className="text-gray-300">Message</span>
                      </button>
                    </Link>
                  </div>
                  <div className="flex gap-5 cursor-pointer text-gray-300">
                    <button onClick={notify}>
                      {" "}
                      <FcLike className="text-xl hover:scale-105 transition-all"></FcLike>
                    </button>
                    <FaComment className="text-xl hover:scale-105 transition-all"></FaComment>
                    <FaShare className="text-xl hover:scale-105 transition-all"></FaShare>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostDetails;
