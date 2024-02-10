/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Title from "../Title/Title"
import RemainCredit from "../RemainCredit/RemainCredit";


const Registration = ({courses,time,price}) => {

    // const [remainingCredit,setRemainingCredit]=useState(20);



  return (
    <div className="md:w-1/4 h-full mt-6 bg-white rounded-xl">

        {/* first element */}
      <div className="font-lg font-bold text-left text-blue-600 ml-5 mt-4 pb-3 mr-5 border-b-2">
        {
            courses.map(course=><RemainCredit key={course.id} course={course}></RemainCredit>)
        }
      </div>

      {/* second element */}
      <div className="ml-5 mr-5 mt-3">
        <h1 className="text-2xl font-bold">Course Name</h1>
        <div className="mt-5 pb-5 border-b-2">
            {
                courses.map(course=><Title key={course.id} course={course}></Title>)
            }
        </div>
      </div>

        {/* third element */}
        <h1 className="mt-4 ml-5 pb-5 mr-5 border-b-2 font-bold">Total Credit Hour : {time}</h1>

        {/* fourth element */}
        <h1 className="mt-4 ml-5 mr-5 pb-5 font-bold">
            Total Price : {price} USD
        </h1>
    </div>
  )
}

export default Registration
