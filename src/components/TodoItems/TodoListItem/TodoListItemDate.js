import React from 'react';

import icons from '../../../static/icons/icons.svg';
import styles from './TodoListItemDate.module.scss';

const TodoListItemDate = props => {
  return (
    <div
      className={`${styles['item__date']} ${
        styles[props.category.toLowerCase()]
      }`}
    >
      <svg>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
      <p>{props.endDate}</p>
    </div>
  );
};

export default TodoListItemDate;
