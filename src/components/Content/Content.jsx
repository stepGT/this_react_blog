import { posts } from '../../data/data';
import styles from './Content.module.css';

const Content = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.count}>
        <button>Get amount of posts</button>
      </div>
    </>
  );
};
export default Content;
