/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";
import "./Posts.css";


const Posts = () => {

    const posts=useLoaderData();
    
  return (
    <div>
      <h2>Post length is: {posts.length}</h2>
      <div className="postsStyle">
        {
            posts.map(post=><Post key={post.id}
            post={post}
            ></Post>)
        }
      </div>
    </div>
  )
}

export default Posts
