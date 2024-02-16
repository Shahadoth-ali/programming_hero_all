/* eslint-disable react/prop-types */
import { AiOutlineDollar } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"


const AppliedJobsDetails = ({appliedJob}) => {


  return (
    <div className="p-5 flex text-center border m-4">
      <img 
      className="w-60 h-60 mr-4"
      src={appliedJob.logo} alt="" />
     <div className="ml-20 mt-12">
     <h2 className="text-2xl">{appliedJob.job_title}</h2>
      <h3>{appliedJob.company_name}</h3>
        {/* element button */}
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{appliedJob.remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{appliedJob.job_type}</button>
    </div>
    {/* element location */}
    <div className="mt-4 flex">
        <h2 className="flex mr-4">
            <IoLocationOutline className="text-xl mr-2"/>
            {appliedJob.location}
        </h2>
        <h2 className="flex">
            <AiOutlineDollar className="text-xl mr-2"/>
            Salary : {appliedJob.salary}
        </h2>
    </div>
     </div>
     <div className="card-actions">
      <button className="btn btn-primary ml-80 mt-16">View details</button>
    </div>
    </div>
  )
}

export default AppliedJobsDetails
