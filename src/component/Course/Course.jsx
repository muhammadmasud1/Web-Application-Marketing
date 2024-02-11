import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import style from "../Styles/Background.module.css";
const Course = () => {
  const [course, setCourse] = useState([]);
  const [itemSelect,setItemSelect] = useState([])
  const [itemPrice,setItemPrice] = useState(0)

  useEffect(() => {
    fetch("courseRegistation.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
   
  const handleSelect = (item) => {
    const selectData = [...itemSelect,item]
     setItemSelect(selectData)

      const coursePrice = item.coursePrice;
      setItemPrice(itemPrice + coursePrice)
  }


 
   const boxShadowStyle = {
     boxShadow:
       "0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 0.2rem #bc13fe, 0 0 0.2rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.1rem #bc13fe",
   };

  return (
    <div className={style.background}>
      <div className=" flex justify-center items-center text-center gap-5 pt-20">
        <div className="w-32 h-1 bg-white"></div>
        <h1 className="text-4xl text-center font-bold">Course Registation</h1>
        <div className="w-32 h-1 bg-white"></div>
      </div>
      <div className="max-w-7xl  py-20 mx-auto h-full flex-col  lg:flex-row flex gap-5">
        <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {course.map((item) => (
            <div key={item.id}>
              <CourseCard handleSelect={handleSelect} item={item}></CourseCard>
            </div>
          ))}
        </div>
        <div className="w-full  amountCard md:w-[60%] p-4 shadow-sm md:ml-4  ">
          <div style={boxShadowStyle} className="px-2 py-2 shadow-sm">
            <h1 className="text-[20px] font-bold mb-4 text-white">
              Credit Our remaining hr
            </h1>
            <hr />
            <div className="my-5 px-5">
              <h2 className="text-[20px] font-semibold text-white">
                Course Name
              </h2>
              <ol className="mt-3  text-white"></ol>
              {itemSelect.map((item) => (
                <li className="list-decimal text-[16px] " key={item.id}>
                  {item.courseName}
                </li>
              ))}
              <hr />
              <h3 className="py-4 text-white">Total Credit Hour : hr</h3>
              <hr />
              <h3 className="py-4 text-white">Total Price : {itemPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
