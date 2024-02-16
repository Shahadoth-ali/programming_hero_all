/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";


const AppliedJobs = () => {

  const jobs=useLoaderData();
  const [appliedJobs,setAppliedJobs]=useState([]);
  const [displayJobs,setDisplayJobs]=useState([]);

  const handleJobsFilter=filter=>{
    if(filter=== 'All'){
      setDisplayJobs(appliedJobs);
    }
    else if(filter === 'Remote'){
      const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onSite'){
      const onsiteJobs=appliedJobs.filter(job=>job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }

    useEffect(()=>{
      const storedJobIds=getStoredJobApplication();
      if(jobs.length>0){
        // const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
        // console.log(jobsApplied,jobs,storedJobIds);
        const jobsApplied=[];
        for(const id of storedJobIds){
          const job=jobs.find(job=>job.id == id);
          if(job){
            jobsApplied.push(job)
          }
        }
        // console.log(jobsApplied,jobs,storedJobIds);
        setAppliedJobs(jobsApplied);
        setDisplayJobs(jobsApplied);
      }
    },[jobs])
  return (
    <div>
      <h2 className="text-center text-2xl my-10">Applied Jobs</h2>
      {/* dropdown menu */}
      <div className="dropdown m-4">
  <div tabIndex={0} role="button" className="btn m-1">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobsFilter('All')}><a>All</a></li>
    <li onClick={()=>handleJobsFilter('Remote')}><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onSite')}><a>onSite</a></li>
  </ul>
</div>
     {/* details off applied job */}
      <div>
        {
          displayJobs.map(appliedJob=><AppliedJobsDetails 
          key={appliedJob.id}
          appliedJob={appliedJob}
          ></AppliedJobsDetails>)
        }
      </div>
    </div>
  )
}

export default AppliedJobs
