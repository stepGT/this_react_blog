import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import Footer from './components/Footer/Footer';
import Login from '@containers/Login';

const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Content />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      <Footer year={ year } />
    </div>
  );
};

export default App;
