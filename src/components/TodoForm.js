import "./TodoForm.scss";

function TodoForm() {
  return (
    <form className="todo__form">
      <div className="todo__form--item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter todo name"
          required
        ></input>
      </div>

      <div className="todo__form--item">
        <label htmlFor="category">Category</label>
        <select id="category" required>
          <option value="Important">Important</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="todo__form--item">
        <label htmlFor="finish-date">Expected Finishing Date</label>
        <input type="date" id="finish-date" required></input>
      </div>

      <div className="todo__form--item">
        <label htmlFor="info">Additional Info (Max 50)</label>
        <textarea
          id="info"
          placeholder="Enter addtional text for todo"
          cols="20"
          rows="5"
          maxLength="50"
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
