import { useState, useEffect } from 'react';
import API from '../../utils/API';
import PostForm from './components/PostForm/PostForm';
import EditPostForm from './components/EditPostForm/EditPostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';
import Preloader from '../Preloader';

const Content = () => {
  const [arrPosts, setArrPosts] = useState([]);
  const [openPostForm, setOpenPostForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [isFetch, setIsFetch] = useState(true);

  const handleAddPost = () => {
    setOpenPostForm(true);
  };

  const handlePostSubmit = () => {
    if (postTitle && postContent) {
      const newPost = {
        id: arrPosts.length + 1,
        title: postTitle,
        description: postContent,
        liked: false,
      };
      setArrPosts((state) => [...state, newPost]);
      API.post('/posts', newPost);
      setOpenPostForm(false);
      setPostTitle('');
      setPostContent('');
    } else {
      openPostForm(true);
    }
  };

  const handleEditSubmit = () => {
    console.log('handleEditSubmit');
  }

  const handlePostClose = () => {
    setOpenPostForm(false);
  };

  const handleEditClose = () => {
    setOpenEditForm(false);
  }

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

  const editPost = (post) => {
    setOpenEditForm(true);
    setEditTitle(post.title);
    setEditContent(post.description);
  };

  const onChangeTitle = (e) => {
    setPostTitle(e.target.value);
  }

  const onChangeContent = (e) => {
    setPostContent(e.target.value);
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
        handleSubmit={handlePostSubmit}
        handleClose={handlePostClose}
        open={openPostForm}
        title={postTitle}
        onChangeTitle={onChangeTitle}
        content={postContent}
        onChangeContent={onChangeContent}
      />
      <EditPostForm
        handleSubmit={handleEditSubmit}
        handleClose={handleEditClose}
        open={openEditForm}
        title={editTitle}
        onChangeTitle={() => {}}
        content={editContent}
        onChangeContent={() => {}}
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
              editPost={() => editPost(post)}
            />
          ))}
      </div>
    </>
  );
};
export default Content;
