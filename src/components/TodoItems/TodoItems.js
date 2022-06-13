import TodoListItem from '../TodoItems/TodoListItem';

import './TodoItems.scss';

function TodoItems(props) {
  const NO_ITEMS_FOUND_MESSAGE = 'No Items Found!!';

  const todoDeleteHandler = id => {
    props.onTodoItemDelete(id);
  };

  return (
    <div className="todo__items">
      <h2 className="todo__items--heading">My Tasks</h2>

      <ul className="todo__list">
        {props.todos.length === 0 ? (
          <p className="todo__list--no-items">{NO_ITEMS_FOUND_MESSAGE}</p>
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
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoItems;
