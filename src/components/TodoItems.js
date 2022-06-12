import "./TodoItems.scss";

import icons from "../static/icons/icons.svg";

function TodoItems() {
  return (
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
  );
}

export default TodoItems;
