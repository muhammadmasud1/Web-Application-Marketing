
import style from "../Styles/Background.module.css"
const Carousel = () => {
              return (
                <div className={style.background}>
                  <div className="max-w-6xl mx-auto h-full py-10">
                    <div className="carousel w-full h-full">
                      <div
                        id="slide1"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src="https://i.ibb.co/v3zMkyn/Untitled-design-6.png"
                          className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide4" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide2" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                      <div
                        id="slide2"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src="https://i.ibb.co/g36WQfc/Untitled-design-5.png"
                          className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide1" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide3" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                      <div
                        id="slide3"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src="https://i.ibb.co/zJKHkBs/Untitled-design-4.png"
                          className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide2" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide4" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                      <div
                        id="slide4"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src="https://i.ibb.co/3RNXTsy/Untitled-design-3.png"
                          className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide3" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide1" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Carousel;




