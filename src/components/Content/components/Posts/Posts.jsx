import styles from './Posts.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Posts = ({ title, description, liked, setLike }) => {
  const color = liked ? 'crimson' : 'black';
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={setLike}>
          <FavoriteIcon style={{ fill: color }} />
        </button>
      </div>
    </div>
  );
};
export default Posts;
