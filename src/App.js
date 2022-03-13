import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
      </main>
      <Footer year={ year } />
    </div>
  );
};

export default App;
