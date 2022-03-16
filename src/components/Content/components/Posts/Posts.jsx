import { useState } from 'react';
import styles from './Posts.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
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
    <div className={styles.post}>
      <div className={styles.postContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <button onClick={setLike}>
            <FavoriteIcon style={{ fill: color }} />
          </button>
        </div>
      </div>

      <div>
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={handleClickOpen}
            aria-label="delete"
            size="large"
            color="neutral"
          >
            <DeleteIcon fontSize="inherit" />
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
    </div>
  );
};
export default Posts;
