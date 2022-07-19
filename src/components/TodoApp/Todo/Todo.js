import { useContext, useEffect } from 'react';
import { TOAST_TIMER } from '../../../config/config';

import TodoForm from '../TodoForm/TodoForm';
import TodoItems from '../TodoItems/TodoItems';
import Button from '../../UI/Button/Button';
import TodoContext from '../../../store/TodoContext';
import Toast from '../../UI/Toast/Toast';

import './Todo.scss';
import styles from '../TodoForm/TodoForm.module.scss';

const Todo = () => {
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    setTimeout(() => {
      todoCtx.hideToast();
    }, TOAST_TIMER);
    /**
     * Don't want to execute effect everytime entire todoCtx changes, but only want to do it when toast flag changges.
     */
    // eslint-disable-next-line
  }, [todoCtx.toast.flag]);

  return (
    <div className="container">
      <div className="todo">
        {todoCtx.toast.flag ? (
          <Toast message={todoCtx.toast.message} type={todoCtx.toast.type} />
        ) : null}

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
