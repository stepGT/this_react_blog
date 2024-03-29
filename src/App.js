import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PublicRoute } from '@routes/PublicRoute';
import { PrivateRoute } from '@routes/PrivateRoute';
import useAxios from '@hooks/useAxios';
import { addPosts } from '@actions/postsAction';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import ContentItem from '@containers/ContentItem';
import Footer from './components/Footer/Footer';
import Login from '@containers/Login';
import Main from '@containers/Main';
import NotFound from './components/NotFound';

const App = () => {
  const { data, loaded } = useAxios('posts');
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
  const [uname, setUname] = useState(localStorage.getItem('uname'));

  useEffect(() => {
    dispatch(addPosts(data));
  }, [dispatch, data]);

  return (
    <div className='App'>
      <Header uname={uname} setUname={setUname} isLogin={isLogin} setIsLogin={setIsLogin} />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/login'
            element={
              <PublicRoute pathRedirect='/' isLogin={isLogin}>
                <Login setUname={setUname} setIsLogin={setIsLogin} />
              </PublicRoute>
            }
          />
          <Route
            path='/content/:postID'
            element={
              <PrivateRoute pathRedirect='/login' isLogin={isLogin}>
                <ContentItem />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/content'
            element={
              <PrivateRoute pathRedirect='/login' isLogin={isLogin}>
                <Content loaded={loaded} />
              </PrivateRoute>
            }
          />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate replace state={{ from: location }} to='404' />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
