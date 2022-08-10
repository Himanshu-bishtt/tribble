import React from 'react';

import styles from './Input.module.scss';

const Input = props => {
  return (
    <div className={styles['expense__form--item']}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={props.onChange}></input>
    </div>
  );
};

export default Input;
