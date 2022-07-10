import React from 'react';

import styles from './TodoListItemAlertDate.module.scss';

const TodoListItemAlertDate = ({ daysLeft }) => {
  let dateText;
  let expired = false;

  if (daysLeft < 0) {
    dateText = 'Expired';
    expired = true;
  } else if (daysLeft === 0) {
    dateText = 'Expires today';
  } else {
    dateText = `${daysLeft} ${daysLeft > 1 ? 'days' : 'day'} left`;
  }

  return (
    <div
      className={`${styles['item__date']} ${expired ? styles['expired'] : ''}`}
    >
      {dateText}
    </div>
  );
};

export default TodoListItemAlertDate;
