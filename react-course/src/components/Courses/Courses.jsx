/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react"
import Course from "../Course/Course";


const Courses = ({hadleSelect}) => {

const [courses,setCourses]=useState([]);

useEffect(()=>{
    fetch('courses.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
},[])



  return (
    <div className="md:w-3/4 md:grid grid-cols-3 mt-3">
      {/* <h1>Total courses:{courses.length}</h1> */}
      {
        courses.map(course=><Course 
        key={course.id}
        course={course}
        hadleSelect={hadleSelect}
        ></Course>)
      }
    </div>
  )
}

export default Courses

