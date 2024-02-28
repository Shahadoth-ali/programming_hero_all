import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* 1st part of this section */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline">
          <IoLogoGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline">
          <FaGithub />
          Login with Github
        </button>
      </div>
      {/* 2nd part of this section */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
         <FaFacebookF className="mr-3"/>
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border-x">
        <FaTwitter className="mr-3"/>
          <span>Twitter</span>
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg">
        <SiInstagram className="mr-3"/>
         <span> Instagram</span>
        </a>
      </div>
         {/* 3rd part of this section */}
         <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
