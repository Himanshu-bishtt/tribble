import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <div className={styles['header']}>
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
};

export default Header;
