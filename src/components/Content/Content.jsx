import { useState, useEffect } from 'react';
import { posts } from '../../data/data';
import Posts from './components/Posts/Posts';
import styles from './Content.module.css';

const Content = () => {
  const [arrPosts, setArrPosts] = useState(
    JSON.parse(localStorage.getItem('arrPosts')) || posts
  );
  useEffect(() => {
    localStorage.setItem('arrPosts', JSON.stringify(arrPosts));
  }, [arrPosts]);
  const setLike = (postID) => {
    setArrPosts((state) =>
      state.map((item) =>
        item.id === postID ? { ...item, liked: !item.liked } : item
      )
    );
  };
  const deletePost = (postID) => {
    setArrPosts((state) => state.filter((item) => item.id !== postID));
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {arrPosts &&
          arrPosts.map((post, ind) => (
            <Posts
              key={post.id}
              title={post.title}
              description={post.description}
              liked={post.liked}
              setLike={() => setLike(post.id)}
              deletePost={() => deletePost(post.id)}
            />
          ))}
      </div>
    </>
  );
};
export default Content;
