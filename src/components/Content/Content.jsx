import styles from './Content.module.css';

const Content = () => {
  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        <div className="post">
          <h2>Post 1</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            fugiat harum. Voluptatibus beatae corrupti nulla, qui odit mollitia
            doloremque rerum magni rem aut laborum, maiores officiis laboriosam
            hic. Ratione, voluptas?
          </p>
        </div>
        <div className="post">
          <h2>Post 2</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            fugiat harum. Voluptatibus beatae corrupti nulla, qui odit mollitia
            doloremque rerum magni rem aut laborum, maiores officiis laboriosam
            hic. Ratione, voluptas?
          </p>
        </div>
        <div className="post">
          <h2>Post 3</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            fugiat harum. Voluptatibus beatae corrupti nulla, qui odit mollitia
            doloremque rerum magni rem aut laborum, maiores officiis laboriosam
            hic. Ratione, voluptas?
          </p>
        </div>
      </div>
      <div className={styles.count}>
        <button>Get amount of posts</button>
      </div>
    </>
  );
};
export default Content;
