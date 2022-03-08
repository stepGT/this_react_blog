import styles from './Posts.module.css';

const Posts = ({ title, description }) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Posts;
