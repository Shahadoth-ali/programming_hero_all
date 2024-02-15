
import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {


const [jobs,setJobs]=useState([]);
const [datalength,setDatalength]=useState(4);

useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data));
},[])


  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p className="text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* second element */}
      <div className="md:grid grid-cols-2 gap-6">
        {
        jobs.slice(0,datalength).map(job=><Job key={job.id}
        job={job}
        ></Job>)
        }
      </div>
      <div className={datalength === jobs.length ? 'hidden' : ""}>
      <button 
        onClick={()=>setDatalength(jobs.length)}
        className="btn btn-secondary text-center">
            Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
