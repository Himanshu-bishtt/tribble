import logo from '../../static/logo/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__logo']}>
        <img
          className={styles['header__logo--image']}
          src={logo}
          alt="tribble logo"
        ></img>
        <h1 className={styles['header__logo--text']}>Tribble Todo App</h1>
      </div>
    </div>
  );
};

export default Header;
