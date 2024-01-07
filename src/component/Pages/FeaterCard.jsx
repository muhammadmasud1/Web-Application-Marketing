import style from '../Styles/Background.module.css'
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
const FeaterCard = ({data}) => {

              const {id,image,name,description,time} = data;
              return (
                <div>
                  <div className={style.card}>
                    <div className="card  shadow-xl">
                      <figure>
                        <img
                          className="rounded-full my-5 text w-36 h-36 object-cover"
                          src={image}
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>{time}</p>
                        <div className="card-actions justify-between my-5 items-center ">
                          <div>
                            <button className={style.originalButton}>Details</button>
                          </div>
                          <div className="flex gap-5 cursor-pointer">
                            <FcLike  className='text-xl hover:scale-105 transition-all'></FcLike>
                            <FaComment className='text-xl hover:scale-105 transition-all'></FaComment>
                            <FaShare className='text-xl hover:scale-105 transition-all'></FaShare>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default FeaterCard;