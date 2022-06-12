import { useState } from 'react';
import './TodoForm.scss';

function TodoForm(props) {
  const [nameValue, setNameValue] = useState('');
  const [optionValue, setOptionValue] = useState('Important');
  const [dateValue, setDateValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const nameHandler = event => {
    setNameValue(event.target.value);
  };

  const selectHandler = event => {
    setOptionValue(event.target.value);
  };

  const dateHandler = event => {
    setDateValue(event.target.value);
  };

  const infoHandler = event => {
    setTextValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

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
    <form className="todo__form" onSubmit={submitHandler}>
      <div className="todo__form--item">
        <label htmlFor="name">Name</label>
        <input
          onChange={nameHandler}
          type="text"
          id="name"
          placeholder="Enter todo name"
          value={nameValue}
          required
        ></input>
      </div>

      <div className="todo__form--item">
        <label htmlFor="category">Category</label>
        <select
          value={optionValue}
          onChange={selectHandler}
          id="category"
          required
        >
          <option value="Important">Important</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="todo__form--item">
        <label htmlFor="finish-date">Expected Finishing Date</label>
        <input
          onChange={dateHandler}
          type="date"
          id="finish-date"
          value={dateValue}
          required
        ></input>
      </div>

      <div className="todo__form--item">
        <label htmlFor="info">Additional Info (Max 50)</label>
        <textarea
          onChange={infoHandler}
          id="info"
          placeholder="Enter addtional text for todo"
          cols="20"
          rows="5"
          maxLength="50"
          value={textValue}
        ></textarea>
      </div>

      <div className="todo__form--item">
        <button className="btn todo__form--submit" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
