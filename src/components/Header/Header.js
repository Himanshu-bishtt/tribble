import logo from '../../static/logo/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  const menuHandler = event => {
    console.log(event.target.checked);
  };

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

      <div className={styles['header__menu']}>
        <input
          className={styles['header__menu--checkbox']}
          onChange={menuHandler}
          type="checkbox"
          id="menu"
        ></input>
        <label htmlFor="menu" className={styles['header__menu--button']}>
          <span className={styles['header__menu--icon']}></span>
          <span className={styles['header__menu--icon']}></span>
          <span className={styles['header__menu--icon']}></span>
        </label>
        <div className={styles['header__menu--box']}>
          <ul className={styles['header__menu--box-list']}>
            <li className={styles['header__menu--box-item']}>Todo App</li>
            <li className={styles['header__menu--box-item']}>
              Expense Tracker
            </li>
            <li className={styles['header__menu--box-item']}>Calculator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
