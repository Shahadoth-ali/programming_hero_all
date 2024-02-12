import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2>this is navbar</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  )
}

export default Header
