import { useState, useEffect } from 'react';
import API from '../../utils/API';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';
import Preloader from '../Preloader';

const Content = () => {
  const [arrPosts, setArrPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFetch, setIsFetch] = useState(true);

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
      API.post('/posts', newPost);
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

  const setLike = (obj) => {
    API.put(`/posts/${obj.id}`, {
      ...obj,
      liked: !obj.liked,
    });
    setArrPosts((state) => {
      return state.map((el) =>
        obj.id === el.id ? { ...el, liked: !el.liked } : el
      );
    });
  };

  const deletePost = (postID) => {
    API.delete(`/posts/${postID}`);
    setArrPosts((state) => {
      return state.filter((post) => {
        return postID !== post.id;
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
    (async function () {
      const response = await API.get('/posts');
      setArrPosts(response.data);
      setIsFetch(false);
    })();
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
        {isFetch && <Preloader />}
        {arrPosts &&
          arrPosts.map((post, ind) => (
            <Posts
              key={ind}
              title={post.title}
              description={post.description}
              liked={post.liked}
              setLike={() => setLike(post)}
              deletePost={() => deletePost(post.id)}
            />
          ))}
      </div>
    </>
  );
};
export default Content;
