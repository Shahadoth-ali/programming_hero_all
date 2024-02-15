/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {

    

   const {logo,job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
}=job;


  return (
    <div>
      
      <div className="card card-compact bg-base-100 shadow-xl">
        {/* first element image */}
  <figure><img src={logo} 
  className="w-28 h-10"
  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    {/* element button */}
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
    </div>
    {/* element location */}
    <div className="mt-4 flex">
        <h2 className="flex mr-4">
            <IoLocationOutline className="text-xl mr-2"/>
            {location}
        </h2>
        <h2 className="flex">
            <AiOutlineDollar className="text-xl mr-2"/>
            Salary : {salary}
        </h2>
    </div>
   <Link to={`/job/${id}`}>
   <div className="card-actions">
      <button className="btn btn-primary">View details</button>
    </div>
   </Link>
  </div>
</div>
    </div>
  )
}

export default Job
