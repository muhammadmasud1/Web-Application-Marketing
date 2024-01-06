import style from './Home.module.css'
const Home = () => {
              return (
                <div>
                  <div className={style.container}>
                    <div className="text-center py-40">
                      <center>
                        <div className={style.containerGlitch}>
                          <p className={style.glitch} id="textGlitch">
                            Welcome to a World of Possibilities!
                          </p>
                        </div>
                      </center>
                      <div className="flex justify-center items-center gap-2 my-10">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered input-secondary w-full max-w-xs"
                        />
                        <button className="btn btn-md btn-active btn-secondary bg-[#9C0101]">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Home;