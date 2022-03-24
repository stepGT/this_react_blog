import CircularProgress from '@mui/material/CircularProgress';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.Preloader}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
