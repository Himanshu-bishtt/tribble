import { useReducer, useRef } from 'react';
import Button from '../UI/Button';

import styles from './TodoForm.module.scss';

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 0 };
  }
  return { value: '', isValid: false };
};

const dateReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 0 };
  }
  return { value: '', isValid: false };
};

function TodoForm(props) {
  const optionRef = useRef();
  const textRef = useRef();

  // using reducer to mangage complex state of name and date
  const [nameInput, nameDispatcher] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });

  const [dateInput, dateDispatcher] = useReducer(dateReducer, {
    value: '',
    isValid: null,
  });

  ///////////////////////////////////////////////////////////

  const nameHandler = event => {
    nameDispatcher({ type: 'USER_INPUT', value: event.target.value });
  };

  const dateHandler = event => {
    dateDispatcher({ type: 'USER_INPUT', value: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const optionValue = optionRef.current.value;
    const dateValue = dateInput.value;
    const textValue = textRef.current.value;

    if (!nameInput.isValid) return;

    if (!dateInput.isValid) return;

    const todo = {
      name: nameValue,
      finishingDate: new Date(dateValue),
      category: optionValue,
      creatingDate: new Date(),
      description: textValue,
    };

    props.onFormSubmit(todo);
  };

  return (
    <form className={styles['todo__form']} onSubmit={submitHandler}>
      <div
        className={`${styles['todo__form--item']} ${
          nameInput.isValid ? '' : styles['invalid']
        }`}
      >
        <label htmlFor="name">Name*</label>
        <input
          onChange={nameHandler}
          type="text"
          id="name"
          placeholder="Enter todo name"
          value={nameInput.value}
        ></input>
      </div>

      <div className={styles['todo__form--item']}>
        <label htmlFor="category">Category*</label>
        <select ref={optionRef} id="category">
          <option value="Important">Important</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div
        className={`${styles['todo__form--item']} ${
          dateInput.isValid ? '' : styles['invalid']
        }`}
      >
        <label htmlFor="finish-date">Expected Finishing Date*</label>
        <input
          onChange={dateHandler}
          type="date"
          id="finish-date"
          value={dateInput.value}
        ></input>
      </div>

      <div className={styles['todo__form--item']}>
        <label htmlFor="info">Additional Info (Max 200)</label>
        <textarea
          id="info"
          placeholder="Enter addtional text for todo"
          cols="20"
          rows="5"
          maxLength="200"
          ref={textRef}
        ></textarea>
      </div>

      <div className={styles['todo__form--item']}>
        <Button
          className={styles['todo__form--cancel']}
          type="button"
          onClick={props.onFormCancel}
        >
          Cancel
        </Button>
        <Button className={styles['todo__form--submit']} type="submit">
          Add Item
        </Button>
      </div>
    </form>
  );
}

export default TodoForm;
