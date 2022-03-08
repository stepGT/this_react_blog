import { posts } from '../../data/data';
import Posts from './components/Posts/Posts';
import styles from './Content.module.css';

const Content = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {posts.map((post) => (
          <Posts
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
};
export default Content;
