import Header from "../Shared/Header/Header"
import Navbar from "../Shared/Navbar/Navbar"
import RightSideNav from "../Shared/RightSideNav/RightSideNav"


const News = () => {

  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">

        </div>
        <div>
       <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  )
}

export default News
