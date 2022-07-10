import React from 'react';

import logo from '../../../static/logo/logo.png';
import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => {
  return (
    <div className={styles['header__logo']}>
      <img
        className={styles['header__logo--image']}
        src={logo}
        alt="tribble logo"
      ></img>
      <h1 className={styles['header__logo--text']}>Tribble Todo App</h1>
    </div>
  );
};

export default HeaderLogo;
