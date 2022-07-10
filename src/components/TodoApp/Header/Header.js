import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = props => {
  const menuItemHandler = item => {
    props.menuItemHandler(item);
  };
  return (
    <div className={styles['header']}>
      <HeaderLogo />
      <HeaderMenu menuItemHandler={menuItemHandler} />
    </div>
  );
};

export default Header;
