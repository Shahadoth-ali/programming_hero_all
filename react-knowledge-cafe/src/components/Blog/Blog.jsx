import PropTypes from 'prop-types';

const Blog = ({blog}) => {

const {title,
    cover,
    reading_time,
    author,
    author_img,posted_date,
    hashtags

}=blog;



  return (
    <div>
        <img src={cover} alt="" />
        {/* second item */}
       <div className='flex justify-between'>
        <div className='flex p-2'>
        <img className='w-14' src={author_img} alt="" />
        <div className='ml-6'>
            <h2 className='text-2xl'>{author}</h2>
            <p>{posted_date}</p>
        </div>
        </div>
        <div>
        <span>{reading_time} min read</span>
        </div>
       </div>
       {/* third item */}
      <h2 className='text-4xl'>tittle:{title}</h2>

      {/* fourth item */}
      <p>
        {
            hashtags.map((hash,idx)=> <span key={idx} className='ml-2'><a href="">#{hash}</a></span>)
        }
        </p>
    </div>
  )
}

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog
