/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Courses from "./components/Courses/Courses"
import Registration from "./components/Registration/Registration"


function App() {

  const [remainingCredit,setRemainingCredit]=useState(20);
  const [courses,setCourses]=useState([]);
  const [time,setTime]=useState(0);
  const [price,setPrice]=useState(0);



  const hadleSelect=(course,credit,tk,id)=>{

   if(!courses.includes(course)){
    if(remainingCredit<=20 && remainingCredit>0){
      const newCourses=[...courses,course]
      setCourses(newCourses);
      const newTime=time+credit;
      setTime(newTime);
      const remainTime=remainingCredit-credit;
      setRemainingCredit(remainTime);
    }else if(remainingCredit===0){
      alert('credit hour exceed.');
    }
    const Newprice=price+tk;
    setPrice(Newprice)
   }else{
    alert('this course is already selected.')
   }
   
  }

  
  return (
    <div className="bg-slate-100 mt-0">
   <header className="text-center text-3xl mt-3">Course Registration</header>
   <main className="md:flex max-w-7xl mx-auto justify-between">
    <Courses hadleSelect={hadleSelect}></Courses>
    <Registration
     courses={courses}
    time={time}
    price={price}
    remainingCredit={remainingCredit}
    ></Registration>
   </main>
    </div>
  )
}

export default App
