import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <ul className="todo__list">
      {props.todos.map((item) => (
        <TodoListItem
          name={item.name}
          endDate={item.finishingDate}
          category={item.category}
          date={item.creatingDate}
          text={item.description}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export default TodoList;
