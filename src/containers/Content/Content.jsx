import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '@utils/API';
import { controller } from '../../utils/API';
import PostForm from './components/PostForm/PostForm';
import EditPostForm from './components/EditPostForm/EditPostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';
import Preloader from '@components/Preloader';
import Box from '@mui/material/Box';

const Content = ({ isLogin }) => {
  const [arrPosts, setArrPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [openPostForm, setOpenPostForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [editID, setEditID] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [isFetch, setIsFetch] = useState(true);
  const navigate = useNavigate();

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
      setArrPosts(state => [...state, newPost]);
      API.post('/posts', newPost);
      setOpenPostForm(false);
      setPostTitle('');
      setPostContent('');
      setCount(count + 1);
    } else {
      setOpenPostForm(true);
    }
  };

  const handleEditSubmit = () => {
    const newPost = {
      id: editID,
      title: editTitle,
      description: editContent,
    };
    API.put(`/posts/${editID}`, newPost);
    setOpenEditForm(false);
    //
    setArrPosts(state => {
      return state.map(el =>
        editID === el.id
          ? { ...el, title: editTitle, description: editContent }
          : el
      );
    });
  };

  const handlePostClose = () => {
    setOpenPostForm(false);
  };

  const handleEditClose = () => {
    setOpenEditForm(false);
  };

  const setLike = obj => {
    API.put(`/posts/${obj.id}`, {
      ...obj,
      liked: !obj.liked,
    });
    setArrPosts(state => {
      return state.map(el =>
        obj.id === el.id ? { ...el, liked: !el.liked } : el
      );
    });
  };

  const deletePost = postID => {
    API.delete(`/posts/${postID}`);
    setArrPosts(state => {
      return state.filter(post => {
        return postID !== post.id;
      });
    });
    setCount(count - 1);
  };

  const editPost = post => {
    setOpenEditForm(true);
    setEditID(post.id);
    setEditTitle(post.title);
    setEditContent(post.description);
  };

  const onChangeTitle = e => {
    setPostTitle(e.target.value);
  };

  const onChangeEditTitle = e => {
    setEditTitle(e.target.value);
  };

  const onChangeContent = e => {
    setPostContent(e.target.value);
  };

  const onChangeEditContent = e => {
    setEditContent(e.target.value);
  };

  useEffect(() => {
    !isLogin && navigate('/login');
    (async function () {
      let isMounted = true; 
      const response = await API.get('/posts');
      if (isMounted) {
        setCount(response.data.count);
        setArrPosts(response.data.items);
        setIsFetch(false);
      }
      return () => {
        isMounted = false; // cleanup toggles value, if unmounted
        controller.abort(); // cancel the request
      };
    })();
  }, [isLogin]);

  return (
    <>
      <Button onClick={handleAddPost} size='large' variant='contained'>
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
        id={editID}
        handleSubmit={handleEditSubmit}
        handleClose={handleEditClose}
        open={openEditForm}
        title={editTitle}
        onChangeTitle={onChangeEditTitle}
        content={editContent}
        onChangeContent={onChangeEditContent}
      />
      <h1>Simple Blog</h1>
      <div className='posts'>
        {isFetch && <Preloader />}
        {arrPosts &&
          [...arrPosts]
            .reverse()
            .map((post, ind) => (
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
        <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Post count: {count}
        </Box>
      </div>
    </>
  );
};
export default Content;
