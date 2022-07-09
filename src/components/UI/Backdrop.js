import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Backdrop.module.scss';

const Backdrop = props => {
  const BackdropItem = () => (
    <div className={styles['backdrop']} onClick={props.onClick}></div>
  );

  return (
    <React.Fragment>
      {createPortal(<BackdropItem />, document.getElementById('backdrop'))}
    </React.Fragment>
  );
};

export default Backdrop;
