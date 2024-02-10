import { IoBookSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import style from '../Styles/Background.module.css'
const CourseCard = ({ item }) => {
  const { courseImg, courseName, description, coursePrice, credit } = item;
  const boxShadowStyle = {
    boxShadow:
      "0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 0.2rem #bc13fe, 0 0 0.2rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.1rem #bc13fe",
  };
  return (
    <>
      <div>
        <div
          style={boxShadowStyle}
          className="card  bg-transparent overflow-hidden border-2 border-white
          to-transparen shadow-xl "
        >
          <figure>
            <img
              className="w-full h-full border border-blue-950"
              src={courseImg}
              alt="Course Images"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {courseName}
              <div className="badge  ">NEW</div>
            </h2>
            <p className="text-gray-200">{description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-2">
                <AiFillDollarCircle />
                <p className="text-[18px] text-gray-200">Price :</p>
              </div>
              <div className="flex items-center justify-center text-center gap-2">
                <IoBookSharp />
                <p className="text-[18px] text-gray-200">Credit :</p>
              </div>
            </div>
            <div>
              <button className="btn btn-primary btn-sm btn-block mt-5 mx-auto">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
