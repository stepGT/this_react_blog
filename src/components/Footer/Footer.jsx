import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>© React Blog - {year}</span>
    </footer>
  );
};
export default Footer;
