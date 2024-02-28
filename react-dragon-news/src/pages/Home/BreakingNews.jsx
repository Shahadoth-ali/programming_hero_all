import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-active btn-secondary">Breaking News</button>
      <Marquee speed={100} pauseOnHover={true}>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some
        text tags around any component or text youd like to slide.....</Link>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some
        text tags around any component or text youd like to slide.....</Link>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components, or just some
        text tags around any component or text youd like to slide.....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
