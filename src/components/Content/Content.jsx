import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';

const Content = () => {
  const [arrPosts, setArrPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    console.log('handleAddPost');
    setOpen(true);
  };

  const handleSubmit = () => {
    if (title && content) {
      const newPost = {
        id: arrPosts.length + 1,
        title: title,
        description: content,
        liked: false,
      };
      setArrPosts((state) => [...state, newPost]);
      setOpen(false);
      setTitle('');
      setContent('');
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
  };

  const setLike = (postID, liked) => {
    axios.put(`https://6237218ab08c39a3af7db13a.mockapi.io/posts/${postID}`, {
      liked: !liked,
    });
    setArrPosts((state) => {
      return state.map((post) =>
        postID === post.id ? { ...post, liked: !liked } : post
      );
    });
  };

  const deletePost = (postID) => {
    axios.delete(`https://6237218ab08c39a3af7db13a.mockapi.io/posts/${postID}`);
    setArrPosts((state) => {
      return state.filter(post => {
        return postID !== post.id
      });
    });
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  useEffect(() => {
    axios
      .get('https://6237218ab08c39a3af7db13a.mockapi.io/posts')
      .then(res => setArrPosts(res.data))
      .catch((err) => {});
  }, []);

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
              key={ind}
              title={post.title}
              description={post.description}
              liked={post.liked}
              setLike={() => setLike(post.id, post.liked)}
              deletePost={() => deletePost(post.id)}
            />
          ))}
      </div>
    </>
  );
};
export default Content;
