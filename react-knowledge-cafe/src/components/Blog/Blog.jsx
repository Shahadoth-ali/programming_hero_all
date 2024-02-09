/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog,handleAddToBookmark,handleReadTime}) => {

const {title,
    cover,
    reading_time,
    author,
    author_img,posted_date,
    hashtags,
    id

}=blog;





  return (
    <div className='mb-20'>
        <img className='w-full mb-8' src={cover} alt="" />
        {/* second item */}
       <div className='flex justify-between mb-4'>
        <div className='flex p-2'>
        <img className='w-14' src={author_img} alt="" />
        <div className='ml-6'>
            <h2 className='text-2xl'>{author}</h2>
            <p>{posted_date}</p>
        </div>
        </div>
        <div>
        <span>{reading_time} min read</span>
        <button 
        onClick={()=>handleAddToBookmark(blog)}
        className='ml-2'><FaRegBookmark /></button>
        </div>
       </div>
       {/* third item */}
      <h2 className='text-4xl mb-4'>tittle:{title}</h2>

      {/* fourth item */}
      <p className='mb-4'>
        {
            hashtags.map((hash,idx)=> <span key={idx} className='ml-2'><a href="">#{hash}</a></span>)
        }
        </p>
        {/* fifth item */}
         <button 
         onClick={()=>handleReadTime(reading_time,id)}
         className='text-2xl text-blue-600 underline'
         >Mark as read</button>
    </div>
  )
}

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog
