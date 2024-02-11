/* eslint-disable no-unused-vars */
import { FiAlignRight } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Route from "../Route/Route";
import { useState } from "react";


const Navbar = () => {

    const [open,setOpen]=useState(true);

    const routes = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About Us", link: "/about" },
        { id: 3, label: "Services", link: "/services" },
        { id: 4, label: "Portfolio", link: "/portfolio" },
        { id: 5, label: "Contact", link: "/contact" }
      ];

  return (
    <nav className="bg-red-300 md:flex">
        {/* first element */}
       <button 
        className="md:hidden text-xl"
        onClick={()=>setOpen(!open)}
     >   
     {
        open===true? <FiAlignRight />:<ImCross />
    }
      
       </button>
       {/* second element */}
   <ul className={`md:flex ${open?'hidden':''} absolute pl-5 bg-red-400`}>
   {
        routes.map(route=><Route key={route.id} 
        route={route}
        ></Route>)
      }
   </ul>
    </nav>
  )
}

export default Navbar
