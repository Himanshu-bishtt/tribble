import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={`${styles['btn']} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      title={props.title}
      data-id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
