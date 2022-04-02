import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './PostForm.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

const PostForm = ({
  open,
  handleSubmit,
  handleClose,
  title,
  onChangeTitle,
  content,
  onChangeContent,
}) => {
  return (
    open && (
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <CloseIcon onClick={handleClose} className={styles.svgClose} />
          <DialogContent>
            <Box className={styles.postForm} component="form">
                <Typography variant="h4" component="div" gutterBottom>
                  Create post
                </Typography>
                <FormControl>
                  <TextField
                    className={styles.postFormTitle}
                    id="outlined-basic"
                    label="Post title"
                    variant="outlined"
                    value={title}
                    onChange={onChangeTitle}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Post content"
                    multiline
                    rows={5}
                    value={content}
                    onChange={onChangeContent}
                  />
                </FormControl>
              </Box>
          </DialogContent>
          <DialogActions className={styles.postFormSubmit}>
            <Button onClick={handleSubmit} size="large" variant="contained">
              Add post
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
};
export default PostForm;
