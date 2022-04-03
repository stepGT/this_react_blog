import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Login.module.css';
import { Typography } from '@mui/material';

const Login = () => {
  return (
    <Stack
      component='form'
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete='off'
      className={styles.LoginForm}
    >
      <Typography variant='h4' gutterBottom component='div'>
        Authorization
      </Typography>
      <TextField id='outlined-basic' label='Login' variant='outlined' />
      <TextField
        id='outlined-password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
      />
      <Button
        className={styles.LoginFormButton}
        onClick={() => {}}
        size='large'
        variant='contained'
      >
        Enter
      </Button>
    </Stack>
  );
};
export default Login;
