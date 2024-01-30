import { useEffect, useState } from "react";
import FeaterCard from "./FeaterCard";
import style from '../Styles/Background.module.css'

const Featurepost = ({ pathLocation }) => {
  const [featureData, setFeatureData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);

  return (
    <div className={style.background}>
      <div className="max-w-6xl mx-auto">
        <div className=""></div>
        <div>
          <h1 className="text-4xl py-10 text-center font-semibold antialiased ">
            Our Team Member{" "}
          </h1>
        </div>
        <div className=" grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {pathLocation === "/post" ? (
            featureData.map((data) => (
              <FeaterCard data={data} key={data.id}></FeaterCard>
            ))
          ) : (
            <>
              {showMore
                ? featureData.map((data) => (
                    <FeaterCard data={data} key={data.id}></FeaterCard>
                  ))
                : featureData
                    .slice(0, 6)
                    .map((data) => (
                      <FeaterCard data={data} key={data.id}></FeaterCard>
                    ))}
            </>
          )}
        </div>
        <div className="flex justify-center items-center py-28">
          {pathLocation === "/post" ? (
            ""
          ) : (
            <>
              {showMore ? (
                <button
                  onClick={handleShowMore}
                  className="btn btn-active btn-md bg-gradient-to-r from-indigo-500 text-white outline-none border-none to-pink-500"
                >
                  Less More
                </button>
              ) : (
                <button
                  onClick={handleShowMore}
                  className="btn btn-active btn-md bg-gradient-to-r from-indigo-500 text-white outline-none border-none to-pink-500"
                >
                  Show More
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featurepost;