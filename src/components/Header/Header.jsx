import { NavLink } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink style={({ isActive }) => {
            return {
              color: isActive ? '#d15700' : '',
            };
          }} to='/'>Home</NavLink>
        <NavLink style={({ isActive }) => {
            return {
              color: isActive ? '#d15700' : '',
            };
          }} to='/about'>About</NavLink>
        <NavLink style={({ isActive }) => {
            return {
              color: isActive ? '#d15700' : '',
            };
          }} to='/login'>Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
