import style from '../Styles/Background.module.css'
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
                        <div className="card-actions ">
                          <div>
                            <button className="btn btn-primary">Buy Now</button>
                            <div>
                                          
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default FeaterCard;