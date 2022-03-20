import { useState, useEffect } from 'react';
import { posts } from '../../data/data';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';
import styles from './Content.module.css';

const Content = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    console.log('handleAddPost');
    setOpen(true);
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
    setOpen(false);
  };

  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
  };

  const storage =
    JSON.parse(localStorage.getItem('arrPosts')) &&
    JSON.parse(localStorage.getItem('arrPosts')).length !== 0
      ? JSON.parse(localStorage.getItem('arrPosts'))
      : posts;
  const [arrPosts, setArrPosts] = useState(storage);
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
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }
  return (
    <>
      <Button onClick={handleAddPost} size="large" variant="contained">
        Add post
      </Button>
      <PostForm
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        open={open}
        title={title}
        onChangeTitle={onChangeTitle}
        content={content}
        onChangeContent={onChangeContent}
      />
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
