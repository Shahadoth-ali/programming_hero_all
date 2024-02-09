/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark"


const Bookmarks = ({bookmarks,readtime}) => {

  return (
    <div className="md:w-1/3 ml-4">
      {/* first item */}
      <h2 className="mt-10 border-solid border-2 border-indigo-700 text-center rounded-md">Spent time on read:{readtime}</h2>

      {/* second item */}
    <div className="border-solid border-2 border-indigo-700 mt-7 rounded-lg">
    <h2 className="text-3xl p-4 m-4">Bookmared Blogs:{bookmarks.length}</h2>
      {
        bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
    </div>
  )
}

export default Bookmarks
