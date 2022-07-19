import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Toast.module.scss';

const Toast = props => {
  const ToastElement = () => {
    return (
      <div
        className={`${styles['toast']} ${
          props.type === 'success' ? styles['success'] : styles['error']
        }`}
      >
        {props.message} ⚠️
      </div>
    );
  };
  return createPortal(<ToastElement />, document.getElementById('toast'));
};

export default Toast;
