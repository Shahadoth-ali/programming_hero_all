/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


const [bookmarks,setBookmarks]=useState([]);
const [readtime,setReadtime]=useState(0);

const handleAddToBookmark=(blog)=>{
   const newBookmarks=[...bookmarks,blog];
   setBookmarks(newBookmarks);
}

const handleReadTime=(time,id)=>{
  // console.log('btn is clicked');
  const newReadTime=readtime+time;
  setReadtime(newReadTime);
  // console.log('reading time is:',time);

  //remove the read blog from bookmark
    // console.log('remove bookmark',id);
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !== id);
    setBookmarks(remainingBookmarks);
}

  return (
    <>
 <Header></Header>
  <main className='md:flex max-w-7xl mx-auto'>
  <Blogs handleAddToBookmark={handleAddToBookmark}
  handleReadTime={handleReadTime}
  ></Blogs>
  <Bookmarks bookmarks={bookmarks}
  readtime={readtime}
  ></Bookmarks>
  </main>
    </>
  )
}

export default App
