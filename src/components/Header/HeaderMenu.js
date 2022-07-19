import React, { useRef, useState } from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = props => {
  const [menu, setMenu] = useState(false);
  const checkboxRef = useRef();

  const menuHandler = event => {
    setMenu(event.target.checked);
  };

  const backdropHandler = () => {
    checkboxRef.current.checked = false;
    setMenu(prev => !prev);
  };

  const listItemHandler = event => {
    const item = event.target;
    if (!item.dataset.listItemId) return;

    checkboxRef.current.checked = false;
    setMenu(prev => !prev);

    props.menuItemHandler(+item.dataset.listItemId);
  };

  return (
    <div className={`${styles['header__menu']} ${menu ? styles['show'] : ''}`}>
      {menu ? <Backdrop onClick={backdropHandler} /> : null}
      <input
        ref={checkboxRef}
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
        <ul
          className={styles['header__menu--box-list']}
          onClick={listItemHandler}
        >
          <li
            className={styles['header__menu--box-item']}
            data-list-item-id="1"
          >
            Todo App
          </li>
          <li
            className={styles['header__menu--box-item']}
            data-list-item-id="2"
          >
            Expense Tracker
          </li>
          <li
            className={styles['header__menu--box-item']}
            data-list-item-id="3"
          >
            Calculator
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
