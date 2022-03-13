import styles from './Posts.module.css';

const Posts = ({ title, description, like, setLike }) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button onClick={setLike}>Like { like }</button>
      </div> 
    </div>
  );
};
export default Posts;
