/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Course = ({course,hadleSelect}) => {

    const {
        title,
        cover_image,
        description,
        price,
        credit_hours
    }=course;



  return (
    <div className="h-96 bg-white p-3 m-3 rounded-xl">

        {/* cover */}
        <img 
        className="w-full h-1/3 rounded-lg"
        src={cover_image} alt="" />

        {/* second and third item */}
      <h2 className="font-lg font-bold mt-4">{title}</h2>
      <p className="mt-4">{description}</p>

      {/* fourth item */}
      <div className="flex justify-between mt-4">
        <div className="w-1/2 flex">
            <FaDollarSign className="mt-1"/>
        <p className="ml-3">Price : {price}</p>
        </div>
       <div className="w-1/2 flex ml-2">
        <IoBookOutline className="mt-1.5"/>
       <p className="ml-3">Credit : {credit_hours}hr</p>
       </div>  
      </div>

        {/* fifth item */}
        <button 
        onClick={()=>hadleSelect(course,credit_hours,price)}
        className="w-full text-center bg-blue-600 text-white rounded-lg p-2 font-bold mt-5">
            Select
        </button>
    </div>
  )
}

export default Course
