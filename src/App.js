import "./App.scss";
import icons from "./static/icons/icons.svg";

function App() {
  return (
    <div className="container">
      <div className="todo">
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

        <div className="todo__items">
          <h2 className="todo__items--heading">My Tasks</h2>

          <ul className="todo__list">
            <li className="todo__list--item">
              <p className="item__name">Item Name</p>

              <div className="item__date  ">
                <svg>
                  <use href={`${icons}#icon-calendar`}></use>
                </svg>
                <p>12th July, 2022</p>
              </div>

              <div className="item__action">
                <button title="info" className="item__action--info">
                  <svg>
                    <use href={`${icons}#icon-info`}></use>
                  </svg>
                </button>
                <div className="info__tooltip">
                  <div className="info__tooltip--category">Important</div>
                  <div className="info__tooltip--date">12th July, 2022</div>
                  <div className="info__tooltip--text">
                    Some text about the todo item that is being added.
                  </div>
                </div>
                <button title="delete" className="item__action--delete">
                  <svg>
                    <use href={`${icons}#icon-delete`}></use>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
