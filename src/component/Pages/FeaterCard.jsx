import style from '../Styles/Background.module.css'
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';

const FeaterCard = ({data}) => {



              const {id,image,name,description,time} = data;
              


      
              return (
                <div>
                  <div className={style.card}>
                    <div className="card   shadow-xl">
                      <figure>
                        <img
                          className="rounded-full my-5 text w-36 h-36 object-cover"
                          src={image}
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className="flex gap-1">
                          <h2 className="card-title">{name}</h2>
                          <MdVerified className="text-blue-500"></MdVerified>
                        </div>
                        <p className="text-gray-300">{description}</p>
                        <div className="flex items-center justify-center gap-1">
                          <IoMdTime></IoMdTime>
                          <p>{time}</p>
                        </div>
                        <div className="card-actions justify-between my-5 items-center ">
                          <div>
                            <Link to={`/postDetails/${id}`}>
                              <button className={style.originalButton}>
                                <span className="text-gray-300">Details</span>
                              </button>
                            </Link>
                          </div>
                          <div className="flex gap-5 cursor-pointer text-gray-300">
                            <FcLike className="text-xl hover:scale-105 transition-all"></FcLike>
                            <FaComment className="text-xl hover:scale-105 transition-all"></FaComment>
                            <FaShare className="text-xl hover:scale-105 transition-all"></FaShare>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default FeaterCard;