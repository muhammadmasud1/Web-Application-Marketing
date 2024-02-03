
import style from '../Styles/Background.module.css'
const Accourdation = () => {
              return (
                <div className={style.background}>
                  <div className="max-w-3xl mx-auto py-20">
                    <div className="text-center text-4xl font-bold py-8">
                      <h1 className={style.text}>Client Testimonials</h1>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        checked="checked"
                      />
                      <div className="collapse-title text-xl font-medium">
                        Introduction
                      </div>
                      <div className="collapse-content">
                        <p>
                          Personal background and passion for web development.
                          Journey into the world of coding and design. Core
                          principles in creating user-friendly interfaces.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Skills
                      </div>
                      <div className="collapse-content">
                        <p>
                          {" "}
                          Proficient in HTML5, CSS3, and JavaScript. Experience
                          with modern frameworks like React . Responsive design
                          using Flexbox and CSS Grid. Cross-browser
                          compatibility and progressive enhancement.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Projects
                      </div>
                      <div className="collapse-content">
                        <p>
                          {" "}
                          Showcase of key projects with project titles and
                          descriptions. Detailed breakdown of the technologies
                          and tools used. Challenges faced and solutions
                          implemented in each project. Links to live demos and
                          GitHub repositories.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Technologies
                      </div>
                      <div className="collapse-content">
                        <p>
                          {" "}
                          Overview of tech stack and preferred tools. Experience
                          with state management libraries (Redux, Recoil).
                          Responsive UI frameworks (Bootstrap, Tailwind CSS).
                          Version control using Git and collaboration on
                          platforms like GitHub.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input
                        type="radio"
                        className="text-2xl"
                        name="my-accordion-3"
                      />
                      <div className="collapse-title text-xl font-medium">
                        Contact Me
                      </div>
                      <div className="collapse-content">
                        <p>
                          Contact form for collaboration, job opportunities, or
                          inquiries. Social media links for networking.
                          Availability and preferred communication channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Accourdation;