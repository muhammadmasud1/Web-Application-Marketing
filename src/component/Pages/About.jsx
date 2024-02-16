import './about.css'
import style from '../Styles/Background.module.css'
const About = () => {

  return (
    <div>
      <main className={style.aboutbanner}>
        <section className="info-section">
          <div className="left-part">
            <h1>
              <span className="d-flex">Your Vision</span>{" "}
              <span className="text">Dream</span>
            </h1>
            <p>
              Crafting the digital canvas, one pixel at a time, to bring your
              vision to life and elevate your online presence with innovative
              and impactful website design solutions.
            </p>
            <a href="#" className="book-link">
              <span className="linktext">Get Started Now</span>
              <span className="arrow">
                <span></span>
              </span>
            </a>
          </div>

          <div className="right-part">
            <div className="bg-line">
              <img
                src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                alt="Line"
              />
              <img
                src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                alt="Line"
              />
            </div>

            <div className="main-grid d-flex">
              <div className="box">
                <span>Html/CSS</span>
              </div>
              <div className="box">
                <div className="bg-img">
                  <img
                    src=" https://i.ibb.co/HK97Ghj/output-image.jpg"
                    alt="Photography"
                  />
                </div>
              </div>
              <div className="box">
                <span>CSS Framework</span>
              </div>
              <div className="box">
                <span>Javascript</span>
              </div>
              <div className="box">
                <div className="bg-img">
                  <img
                    src="https://i.ibb.co/zfNJBgP/replicate-prediction-rhbffejbpeqwy6244j5rf2h4om.jpg"
                    alt="VFX"
                  />
                </div>
              </div>
              <div className="box">
                <div className="bg-img">
                  <img
                    src="
https://i.ibb.co/LQpmC5N/replicate-prediction-e27oy2zcevcpnu7llapr3dsr44-Copy-Copy.png"
                    alt="VFX"
                  />
                </div>
              </div>
              <div className="box">
                <span>React Js / Firebase</span>
              </div>
              <div className="box">
                <div className="bg-img">
                  <img
                    src="https://i.ibb.co/9Nw2JnT/replicate-prediction-5rdatkrbl5bvclalbz2aadcpra.jpg"
                    alt="Videography"
                  />
                </div>
              </div>
            </div>

            <div className="bg-circle-h-line">
              <img
                src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                alt="Horizontal-circle"
              />
              <img
                src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                alt="Horizontal-circle"
              />
              <img
                src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                alt="Horizontal-circle"
              />
            </div>
            <div className="bg-dash-circle">
              <img
                src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                alt="dash-circle"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;