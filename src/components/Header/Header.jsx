import { Link } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
