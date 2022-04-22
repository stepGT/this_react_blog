import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLike } from '@actions/postsAction';
import API from '@utils/API';
import PostForm from './components/PostForm/PostForm';
import EditPostForm from './components/EditPostForm/EditPostForm';
import Posts from './components/Posts/Posts';
import Button from '@mui/material/Button';
import Preloader from '@components/Preloader';
import Box from '@mui/material/Box';
import styles from './Content.module.css';

const Content = ({ loaded }) => {
  const dispatch = useDispatch();
  const [openPostForm, setOpenPostForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [editID, setEditID] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const { items, count } = useSelector(state => state.postsReducer.posts) || {};
  const handleAddPost = () => {
    setOpenPostForm(true);
  };

  const handlePostSubmit = () => {
    if (postTitle && postContent) {
      const newPost = {
        id: items.length + 1,
        title: postTitle,
        description: postContent,
        liked: false,
      };
      //setArrPosts(state => [...state, newPost]);
      API.post('posts', newPost);
      setOpenPostForm(false);
      setPostTitle('');
      setPostContent('');
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
    API.put(`posts/${editID}`, newPost);
    setOpenEditForm(false);
    //
    // setArrPosts(state => {
    //   return state.map(el =>
    //     editID === el.id
    //       ? { ...el, title: editTitle, description: editContent }
    //       : el
    //   );
    // });
  };

  const handlePostClose = () => {
    setOpenPostForm(false);
  };

  const handleEditClose = () => {
    setOpenEditForm(false);
  };

  const setLikeHandler = obj => {
    API.put(`posts/${obj.id}`, {
      ...obj,
      liked: !obj.liked,
    });
    dispatch(setLike(obj.id));
  };

  const deletePost = postID => {
    API.delete(`posts/${postID}`);
    // setArrPosts(state => {
    //   return state.filter(post => {
    //     return postID !== post.id;
    //   });
    // });
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
      <div className={styles.posts}>
        {!loaded && <Preloader />}
        {items &&
          [...items]
            .reverse()
            .map((post, ind) => (
              <Posts
                key={ind}
                postID={post.id}
                title={post.title}
                description={post.description}
                liked={post.liked}
                setLike={() => setLikeHandler(post)}
                deletePost={() => deletePost(post.id)}
                editPost={() => editPost(post)}
              />
            ))}
        {items && (
          <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Post count: {count}
          </Box>
        )}
      </div>
    </>
  );
};
export default Content;
