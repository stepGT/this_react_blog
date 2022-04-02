import { Routes, Route, Link } from 'react-router-dom';
import '@/App.css';
import Header from './components/Header/Header';
import Content from '@containers/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
      </main>
      <Footer year={ year } />
    </div>
  );
};

export default App;
