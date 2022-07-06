import { useRef, useState } from 'react';
import styles from './TodoForm.module.scss';

function TodoForm(props) {
  const nameRef = useRef();
  const optionRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const [isNameValid, setIsNameValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const nameHandler = event => {
    if (event.target.value.trim().length > 0) setIsNameValid(true);
  };

  const dateHandler = event => {
    if (event.target.value.trim().length > 0) setIsDateValid(true);
  };

  const submitHandler = event => {
    event.preventDefault();

    const nameValue = nameRef.current.value;
    const optionValue = optionRef.current.value;
    const dateValue = dateRef.current.value;
    const textValue = textRef.current.value;

    if (nameValue.trim().length === 0) {
      console.log('Invalid name input');
      setIsNameValid(false);
      return;
    }

    if (dateValue.trim().length === 0) {
      console.log('Invalid date input');
      setIsDateValid(false);
      return;
    }

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
          isNameValid ? '' : styles['invalid']
        }`}
      >
        <label htmlFor="name">Name*</label>
        <input
          onChange={nameHandler}
          type="text"
          id="name"
          placeholder="Enter todo name"
          ref={nameRef}
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
          isDateValid ? '' : styles['invalid']
        }`}
      >
        <label htmlFor="finish-date">Expected Finishing Date*</label>
        <input
          onChange={dateHandler}
          type="date"
          id="finish-date"
          ref={dateRef}
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
        <button
          className={`btn ${styles['todo__form--cancel']}`}
          type="button"
          onClick={props.onFormCancel}
        >
          Cancel
        </button>
        <button className={`btn ${styles['todo__form--submit']}`} type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
