import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ pathRedirect, isLogin, children }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate(pathRedirect);
  }, []);
  return isLogin ? children : <></>;
};
