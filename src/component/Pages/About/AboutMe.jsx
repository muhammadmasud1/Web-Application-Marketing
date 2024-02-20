import style from '../../Styles/Background.module.css'
import './aboutme.css'
const AboutMe = () => {
              
              return (
                <div className={style.background}>
                  <div className="max-w-7xl mx-auto">
                    <div className="py-20 px-5 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                      <div>
                        <img
                          className="max-w-full object-cover rounded-md shadow-[5px_5px_0px_0px_rgba(224,255,255)]"
                          src="https://i.ibb.co/TqVJ9Mq/output-image.jpg"
                          alt=""
                        />
                      </div>
                      <div className="about">
                        <h1 className="text-5xl mb-5 font-serif font-bold text-left ">
                          About Me
                        </h1>
                        <p className="my-5 text-xl text-white">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum,
                        </p>
                        <div className="taps ">
                          <div role="tablist" className="tabs tabs-bordered">
                            <input
                              type="radio"
                              name="my_tabs_1"
                              role="tab"
                              className="tab text-white text-xl font-bold"
                              aria-label=" Main Skills"
                            />
                            <div role="tabpanel" className="tab-content p-10">
                              <p className="text-[18px] text-bold hover:text-red-600">
                                Front End Web Development
                              </p>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                HTML ,CSS , Javascript, Reactjs,Firebase
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Web and user interface design - Development
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                Websites, web experiences, ...
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Interaction design - Animation
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300 font-serif">
                                I like to move it move it.
                              </p>
                            </div>

                            <input
                              type="radio"
                              name="my_tabs_1"
                              role="tab"
                              className="tab text-white text-xl font-bold"
                              aria-label="Awards"
                              checked
                            />
                            <div role="tabpanel" className="tab-content p-10">
                              <p className="text-[18px] text-bold hover:text-red-600">
                                Programming Hero Community
                              </p>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2023-2024
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Webby Awards
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2023-2024
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Web Design Award
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300 font-serif">
                                2022-2023
                              </p>
                            </div>

                            <input
                              type="radio"
                              name="my_tabs_1"
                              role="tab"
                              className="tab text-white text-xl font-bold"
                              aria-label=" Experience"
                            />
                            <div role="tabpanel" className="tab-content p-10">
                              <p className="text-[18px] text-bold hover:text-red-600">
                                Front End Web Development - Current
                              </p>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2023-2024
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Web Design
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2022-2023
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Digital Marketing - SEO
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300 font-serif">
                                2020-23
                              </p>
                            </div>

                            <input
                              type="radio"
                              name="my_tabs_1"
                              role="tab"
                              className="tab text-white text-xl font-bold"
                              aria-label="Education"
                            />
                            <div role="tabpanel" className="tab-content p-10">
                              <p className="text-[18px] text-bold hover:text-red-600">
                                Diploma in CSE - Thakurgaon Polytechnic Institue
                              </p>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2020-2024
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                High School in Electical - Atwari Model Pilot High School
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300  font-serif">
                                2015-2020
                              </p>
                              <h3 className="text-[18px] text-bold hover:text-red-600">
                                Primary - 3 No Barasingiya Primary School
                              </h3>
                              <p className="mb-4 text-[16px] text-slate-300 font-serif">
                                2010-2015
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default AboutMe;