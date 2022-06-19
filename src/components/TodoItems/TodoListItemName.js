import React from 'react';

import styles from './TodoListItemName.module.scss';

const TodoListItemName = props => {
  return (
    <p className={styles['item__name']} title={props.name}>
      {props.name}
    </p>
  );
};

export default TodoListItemName;
