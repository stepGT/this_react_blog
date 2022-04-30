import { useLocation } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = ({ text = '404 Not found' }) => {
  const location = useLocation();
  return <p className={style.NotFound}>{text} {location.state.from.pathname}</p>;
};

export default NotFound;
