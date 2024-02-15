import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {

    const jobs=useLoaderData();
    const {id}=useParams();

    const joob=jobs.find(joob=>joob.id == id);
    console.log(id,joob);


  const handleApplyJob=()=>{
    //saving to local storage
    saveJobApplication(id);
    toast('You have applied successfully.')
  }



  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-10">Job Details</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {/* first child  */}
        <div className="border md:col-span-3">
            <h2 className="text-xs">Job Description:{joob.job_description}</h2>
             <h2 className="text-xs mt-4">Job Responsiblity:{joob.job_responsibility}</h2>
             <div className="mt-5">
                <h2 className="text-xs font-bold">Educational Requirements:</h2>
                <p className="text-xs">
                    {joob.educational_requirements}
                </p>
             </div>
             <div className="mt-5 mb-10">
                <h2 className="text-xs font-bold">Experience:</h2>
                <p className="text-xs">
                    {joob.experiences}
                </p>
             </div>
        </div>
        {/* second child */}
         <div className="border">
          <h2 className="text-center font-bold">Job Details</h2>
          <div className="my-4">
        <h2 className="flex mr-4">
            <IoLocationOutline className="text-xl mr-2"/>
            {joob.location}
        </h2>
        <h2 className="flex">
            <AiOutlineDollar className="text-xl mr-2"/>
            Salary : {joob.salary}(per month)
        </h2>
    </div>
          <button
          onClick={handleApplyJob}
          className="btn btn-primary w-full">Apply Now</button>
         </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails
