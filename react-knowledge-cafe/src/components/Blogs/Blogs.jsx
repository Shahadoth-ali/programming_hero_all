/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleReadTime}) => {

const [blogs,setBlogs]=useState([]);

useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
},[])


  return (
    <div className="md:w-2/3">
     <h1 className="text-4xl">Blogs length:{blogs.length}</h1>
     {
      blogs.map(blog=><Blog key={blog.id}
         blog={blog}
         handleAddToBookmark={handleAddToBookmark}
         handleReadTime={handleReadTime}
         >
         </Blog>)
     }
    </div>
  )
};

Blogs.propTypes={
  handleAddToBookmark:PropTypes.func
}

export default Blogs
