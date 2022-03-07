import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#first">Home</a>
          <a href="#second">About</a>
          <a href="#third">Contact</a>
        </nav>
      </header>

      <main>
        <h1>Simple Blog</h1>
        <div className="posts">
          <div className="post">
            <h2>Post 1</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, fugiat harum. Voluptatibus beatae corrupti nulla, qui
              odit mollitia doloremque rerum magni rem aut laborum, maiores
              officiis laboriosam hic. Ratione, voluptas?
            </p>
          </div>
          <div className="post">
            <h2>Post 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, fugiat harum. Voluptatibus beatae corrupti nulla, qui
              odit mollitia doloremque rerum magni rem aut laborum, maiores
              officiis laboriosam hic. Ratione, voluptas?
            </p>
          </div>
          <div className="post">
            <h2>Post 3</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, fugiat harum. Voluptatibus beatae corrupti nulla, qui
              odit mollitia doloremque rerum magni rem aut laborum, maiores
              officiis laboriosam hic. Ratione, voluptas?
            </p>
          </div>
        </div>

        <div className="count">
          <button>Get amount of posts</button>
        </div>
      </main>

      <footer>
        <span>© React Blog - 2021</span>
      </footer>
    </div>
  );
};

export default App;
