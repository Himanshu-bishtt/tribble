import TodoListItem from '../TodoItems/TodoListItem';

import styles from './TodoItems.module.scss';

function TodoItems(props) {
  const NO_ITEMS_FOUND_MESSAGE = 'No Items Found!!';

  const todoDeleteHandler = id => {
    props.onTodoItemDelete(id);
  };

  const deleteButtonClickedHandler = flag => {
    props.onTodoDeleteButtonClicked(flag);
  };

  return (
    <div className={styles['todo__items']}>
      <h2 className={styles['todo__items--heading']}>
        My {props.todos.length} Tasks
      </h2>

      <ul className={styles['todo__list']}>
        {props.todos.length === 0 ? (
          <p className={styles['todo__list--no-items']}>
            {NO_ITEMS_FOUND_MESSAGE}
          </p>
        ) : (
          props.todos.map((item, index) => (
            <TodoListItem
              key={item.id}
              id={item.id}
              name={item.name}
              endDate={item.finishingDate}
              category={item.category}
              date={item.creatingDate}
              text={item.description}
              onTodoDelete={todoDeleteHandler}
              onDeleteButtonClicked={deleteButtonClickedHandler}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoItems;
