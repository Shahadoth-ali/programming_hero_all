/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom"


const PostDetails = () => {
    const postData=useLoaderData();
  const {body,id}=postData;
  const navigate=useNavigate();

  const handleBack=()=>{
    navigate(-1);
  }

  return (
    <div>
      <p>details about id: {id}</p>
      <p>description:{body}</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default PostDetails
