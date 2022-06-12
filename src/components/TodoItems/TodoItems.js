import TodoList from './TodoList';

import './TodoItems.scss';

function TodoItems(props) {
  return (
    <div className="todo__items">
      <h2 className="todo__items--heading">My Tasks</h2>

      <TodoList todos={props.todos} />
    </div>
  );
}

export default TodoItems;
