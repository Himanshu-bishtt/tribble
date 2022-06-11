import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="todo">
        <form className="todo__form">
          <div className="todo__form--item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter todo name"></input>
          </div>

          <div className="todo__form--item">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option value="Important">Important</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="todo__form--item">
            <label htmlFor="finish-date">Expected Finishing Date</label>
            <input type="date" id="finish-date"></input>
          </div>

          <div className="todo__form--item">
            <label htmlFor="info">Additional Info</label>
            <textarea
              id="info"
              placeholder="Enter addtional text for todo"
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <div className="todo__form--item">
            <button className="btn todo__form--submit" type="submit">
              Add Item
            </button>
          </div>
        </form>

        <div className="todo__items"></div>
      </div>
    </div>
  );
}

export default App;
