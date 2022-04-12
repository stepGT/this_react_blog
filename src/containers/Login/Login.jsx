import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Login.module.css';
import { Typography } from '@mui/material';

const Login = ({ setUname, setIsLogin, isLogin }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const onClickHandler = e => {
    e.preventDefault();
    localStorage.setItem('isLogin', true);
    localStorage.setItem('uname', e.nativeEvent.target[0].value);
    setIsLogin(true);
    setUname(e.nativeEvent.target[0].value);
    navigate('/' + location.search);
  };

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin]);

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
      onSubmit={onClickHandler}
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
        size='large'
        variant='contained'
        type='submit'
      >
        Enter
      </Button>
    </Stack>
  );
};
export default Login;
