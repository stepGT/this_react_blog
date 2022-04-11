import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import './Header.module.css';

const Header = ({ uname, setUname, isLogin, setIsLogin }) => {
  const handleClick = () => {
    setIsLogin(false);
    setUname(uname);
    localStorage.removeItem('isLogin');
    localStorage.removeItem('uname');
  }
  return (
    <header>
      {isLogin ? (
        <nav>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#d15700' : '',
              };
            }}
            to='/'
          >
            Home
          </NavLink>
          <NavLink onClick={handleClick} to='/login'>
            <Tooltip title={'Welcome ' + uname}>
              <LogoutIcon />
            </Tooltip>
            Logout
          </NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#d15700' : '',
              };
            }}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#d15700' : '',
              };
            }}
            to='/login'
          >
            <LoginIcon />
            Login
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
