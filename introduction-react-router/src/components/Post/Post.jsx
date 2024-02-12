/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

  const {id,title}=post;
  const navigate=useNavigate();

  const postStyle={
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'20px'
}

const handleClick=(id)=>{
   navigate(`/post/${id}`)
}


  return (
    <div className={postStyle}>
        <p>post id is:{id}</p>
      <p>Title:{title}</p>
      <Link to={`/post/${id}`}>Show more</Link>
      <Link to={`/post/${id}`}>
      <button>show details</button>
      </Link>
      <button onClick={()=>handleClick(id)}>details</button>
    </div>
  )
}

export default Post
