import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PublicRoute } from '@routes/PublicRoute';
import { PrivateRoute } from '@routes/PrivateRoute';
import useAxios from '@hooks/useAxios';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import Footer from './components/Footer/Footer';
import Login from '@containers/Login';
import Main from '@containers/Main';
import NotFound from './components/NotFound';

const App = () => {
  const location = useLocation();
  const { data, loaded } = useAxios('/posts');
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
  const [uname, setUname] = useState(localStorage.getItem('uname'));
  const year = new Date().getFullYear();
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
            exact
            path='/content'
            element={
              <PrivateRoute pathRedirect='/login' isLogin={isLogin}>
                <Content data={data} loaded={loaded} />
              </PrivateRoute>
            }
          />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate state={{ from: location }} to='404' />} />
        </Routes>
      </main>
      <Footer year={year} />
    </div>
  );
};

export default App;
