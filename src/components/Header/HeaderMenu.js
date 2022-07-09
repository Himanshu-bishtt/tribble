import React, { useState } from 'react';
import Backdrop from '../UI/Backdrop';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = event => {
    setMenu(event.target.checked);
  };

  const backdropHandler = () => {
    setMenu(prev => !prev);
  };

  return (
    <div className={`${styles['header__menu']} ${styles[menu ? 'show' : '']}`}>
      {menu ? <Backdrop onClick={backdropHandler} /> : null}
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
          <li className={styles['header__menu--box-item']}>Expense Tracker</li>
          <li className={styles['header__menu--box-item']}>Calculator</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
