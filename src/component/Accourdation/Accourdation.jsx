
import style from '../Styles/Background.module.css'
const Accourdation = () => {
              return (
                <div className={style.background}>
                  <div className="max-w-3xl mx-auto">
                            <div className='text-center text-4xl font-bold py-8'>My Accouradition Of About</div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        checked="checked"
                      />
                      <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                      </div>
                      <div className="collapse-content">
                        <p>hello</p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                      </div>
                      <div className="collapse-content">
                        <p>hello</p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-transparent">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                      </div>
                      <div className="collapse-content">
                        <p>hello</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Accourdation;