import styles from './TodoListItem.module.scss';
import TodoListItemAction from './TodoListItemAction';
import TodoListItemDate from './TodoListItemDate';
import TodoListItemName from './TodoListItemName';

const TodoListItem = props => {
  const endDate = generateDate(props.endDate);

  const itemCreateDate = generateDate(props.date);

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

export default TodoListItem;
