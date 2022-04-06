import style from './NotFound.module.css';

const NotFound = ({ text = '404 Not found' }) => {
  return <p className={style.NotFound}>{text}</p>;
};

export default NotFound;
