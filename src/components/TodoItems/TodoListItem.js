import TodoListItemAlertDate from './TodoListItemAlertDate';
import TodoListItemName from './TodoListItemName';
import TodoListItemDate from './TodoListItemDate';
import TodoListItemAction from './TodoListItemAction';

import styles from './TodoListItem.module.scss';

const TodoListItem = props => {
  const endDate = generateDate(props.endDate);

  const itemCreateDate = generateDate(props.date);

  const curDate = new Date();

  const daysPassed = calcDaysPassed(props.endDate, curDate);

  const itemDeleteHandler = id => {
    props.onTodoDelete(id);
  };

  return (
    <li
      className={`${styles['todo__list--item']} ${
        styles[props.category.toLowerCase()]
      }`}
      data-id={props.id}
    >
      {daysPassed <= 7 ? (
        <TodoListItemAlertDate daysPassed={daysPassed} />
      ) : null}

      <TodoListItemName name={props.name} />

      <TodoListItemDate endDate={endDate} category={props.category} />

      <TodoListItemAction
        id={props.id}
        itemCreateDate={itemCreateDate}
        category={props.category}
        text={props.text}
        onItemDelete={itemDeleteHandler}
      />
    </li>
  );
};

const generateDate = date => {
  return `${String(date.getDate()).padStart(2, 0)}th ${date.toLocaleString(
    'en-us',
    {
      month: 'long',
    }
  )}, ${date.getFullYear()}`;
};

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

export default TodoListItem;
