import { useContext } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItems from '../TodoItems/TodoItems';

import './Todo.scss';
import styles from '../TodoForm/TodoForm.module.scss';
import Button from '../../UI/Button';
import TodoContext from '../../../store/TodoContext';

const Todo = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <div className="container">
      <div className="todo">
        {!todoCtx.formShowing ? (
          <Button
            className={styles['todo__form--btn']}
            onClick={todoCtx.showFormHandler}
          >
            Add New Todo
          </Button>
        ) : (
          <TodoForm
            onFormSubmit={todoCtx.formSubmitHandler}
            onFormCancel={todoCtx.hideFormHandler}
          />
        )}

        <TodoItems
          todos={todoCtx.todoItems}
          onTodoItemDelete={todoCtx.todoItemDeleteHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
