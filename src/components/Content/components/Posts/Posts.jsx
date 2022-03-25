import { useState } from 'react';
import styles from './Posts.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000',
    },
  },
});

const Posts = ({ title, description, liked, setLike, deletePost }) => {
  const [open, setOpen] = useState(false);

  const handleClickEdit = (e) => {
    console.log('handleClickEdit');
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    switch (e.target.innerText) {
      case 'CANCEL':
        setOpen(false);
        break;
      case 'OK':
        deletePost();
        setOpen(false);
        break;
      default:
        break;
    }
  };
  const color = liked ? 'crimson' : 'black';
  return (
    <Box className={styles.post}>
      <div className={styles.postContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.icons}>
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={handleClickEdit}
            aria-label="edit"
            size="large"
            color="neutral"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={handleClickOpen}
            aria-label="delete"
            size="large"
            color="neutral"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={setLike}
            aria-label="favorite"
            size="large"
            color="neutral"
          >
            <FavoriteIcon style={{ fill: color }} />
          </IconButton>
        </ThemeProvider>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`Delete post ${title}?`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
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
      </div>
    </Box>
  );
};
export default Posts;
