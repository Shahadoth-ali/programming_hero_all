/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
// console.log(bookmark);

const {title}=bookmark;

  return (
    <div className="mt-5">
      <h3 className="text-2xl p-4 m-4 bg-slate-200 rounded-xl">{title}</h3>
    </div>
  )
}

export default Bookmark
