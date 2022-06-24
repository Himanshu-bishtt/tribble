import React from 'react';

import styles from './TodoListItemAlertDate.module.scss';

function TodoListItemAlertDate(props) {
  return (
    <div className={styles['item__date']}>{props.daysPassed} days left</div>
  );
}

export default TodoListItemAlertDate;
