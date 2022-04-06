import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import Footer from './components/Footer/Footer';
import Login from '@containers/Login';
import About from '@containers/About';
import NotFound from './components/NotFound';

const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Content />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer year={year} />
    </div>
  );
};

export default App;
