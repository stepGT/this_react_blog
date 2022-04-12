import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import Footer from './components/Footer/Footer';
import Login from '@containers/Login';
import Main from '@containers/Main';
import NotFound from './components/NotFound';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
  const [uname, setUname] = useState(localStorage.getItem('uname'));
  const year = new Date().getFullYear();
  return (
    <div className='App'>
      <Header uname={uname} setUname={setUname} isLogin={isLogin} setIsLogin={setIsLogin} />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route exact path='/content' element={<Content isLogin={isLogin} />} />
          <Route
            path='/login'
            element={
              <Login
                setUname={setUname}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer year={year} />
    </div>
  );
};

export default App;
