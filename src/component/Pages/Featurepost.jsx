import { useEffect, useState } from "react";
import FeaterCard from "./FeaterCard";
import style from '../Styles/Background.module.css'

const Featurepost = () => {

              const [featureData, setFeatureData] = useState([])

              useEffect(() => {
                            fetch('feature.json')
                            .then(res => res.json())
                            .then(data => setFeatureData(data))
              },[])
              
              return (
                <div className={style.background}>
                  <div className="max-w-6xl mx-auto">
                  <div className="my-10"></div>
                    <div>
                      <h1 className="text-4xl py-10 text-center font-semibold antialiased ">
                        Feature Post{" "}
                      </h1>
                    </div>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                      {featureData.map((data) => (
                        <FeaterCard data={data} key={data.id}></FeaterCard>
                      ))}
                    </div>
                  </div>
                </div>
              );
};

export default Featurepost;