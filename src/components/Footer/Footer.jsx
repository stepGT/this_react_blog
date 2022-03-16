import styles from './Footer.module.css';

const Footer = ({ year }) => {
  return (
    <footer>
      <span>© React Blog - { year }</span>
    </footer>
  );
};
export default Footer;
