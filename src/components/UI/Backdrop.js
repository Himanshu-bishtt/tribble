import { useState } from 'react';
import styles from './Backdrop.module.scss';

const Backdrop = props => {
  const backdropHandler = () => {
    props.onBackdropClick(true);

    console.log('Backdrop clicked');
  };

  return (
    <div
      className={`${styles['backdrop']} ${styles[props.className]}`}
      onClick={backdropHandler}
    ></div>
  );
};

export default Backdrop;
