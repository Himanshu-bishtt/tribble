import { useState } from 'react';
import styles from './TodoForm.module.scss';

function TodoForm(props) {
  const [nameValue, setNameValue] = useState('');
  const [optionValue, setOptionValue] = useState('Important');
  const [dateValue, setDateValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const nameHandler = event => {
    if (event.target.value.trim().length > 0) setIsNameValid(true);
    setNameValue(event.target.value);
  };

  const selectHandler = event => {
    setOptionValue(event.target.value);
  };

  const dateHandler = event => {
    if (event.target.value.trim().length > 0) setIsDateValid(true);
    setDateValue(event.target.value);
  };

  const infoHandler = event => {
    setTextValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

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

    setNameValue('');
    setOptionValue('Important');
    setDateValue('');
    setTextValue('');
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
          value={nameValue}
        ></input>
      </div>

      <div className={styles['todo__form--item']}>
        <label htmlFor="category">Category*</label>
        <select value={optionValue} onChange={selectHandler} id="category">
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
          value={dateValue}
        ></input>
      </div>

      <div className={styles['todo__form--item']}>
        <label htmlFor="info">Additional Info (Max 200)</label>
        <textarea
          onChange={infoHandler}
          id="info"
          placeholder="Enter addtional text for todo"
          cols="20"
          rows="5"
          maxLength="200"
          value={textValue}
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
