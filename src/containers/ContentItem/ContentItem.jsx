import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectPostByID } from '@redux/selectors';
import { setLike, deletePost, editPost } from '@actions/postsAction';
import API from '@utils/API';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Preloader from '@components/Preloader';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
    },
  },
});

const ContentItem = ({ editPost }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { postID } = useParams();
  const obj = useSelector(state => selectPostByID(state, postID)) || [];
  const post = obj[0] || {};
  const color = post.liked ? 'crimson' : 'black';
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = e => {
    switch (e.target.innerText) {
      case 'CANCEL':
        setOpen(false);
        break;
      case 'OK':
        const postID = post.id;
        dispatch(deletePost(postID));
        API.delete(`posts/${postID}`);
        setOpen(false);
        navigate('/');
        break;
      default:
        break;
    }
  };
  const setLikeHandler = obj => {
    API.put(`posts/${obj.id}`, {
      ...obj,
      liked: !obj.liked,
    });
    dispatch(setLike(obj.id));
  };
  return (
    <>
      {!post && <Preloader />}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 5,
          pb: 5,
        }}
      >
        <Container>
          <Card sx={{ maxWidth: 640, margin: '0 auto' }}>
            <CardMedia
              height='640'
              component='img'
              image={post.image}
              alt=''
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {post.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {post.description}
              </Typography>
            </CardContent>
            <CardActions>
              <ThemeProvider theme={theme}>
                <IconButton
                  onClick={editPost}
                  aria-label='edit'
                  size='large'
                  color='neutral'
                >
                  <EditIcon fontSize='inherit' />
                </IconButton>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='delete'
                  size='large'
                  color='neutral'
                >
                  <DeleteIcon fontSize='inherit' />
                </IconButton>
                <IconButton
                  onClick={() => setLikeHandler(post)}
                  aria-label='favorite'
                  size='large'
                  color='neutral'
                >
                  <FavoriteIcon style={{ fill: color }} />
                </IconButton>
              </ThemeProvider>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
              >
                <DialogTitle id='alert-dialog-title'>{`Delete post ${post.title}?`}</DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                    You real want delete this post? Hmm
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} autoFocus>
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
};
export default ContentItem;
