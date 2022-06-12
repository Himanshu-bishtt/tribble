import icons from "../../static/icons/icons.svg";
import "./TodoListItem.scss";

function TodoListItem(props) {
  const endDate = generateDate(props.endDate);

  const itemCreateDate = generateDate(props.date);

  return (
    <li className="todo__list--item">
      <p className="item__name">{props.name}</p>

      <div className="item__date">
        <svg>
          <use href={`${icons}#icon-calendar`}></use>
        </svg>
        <p>{endDate}</p>
      </div>

      <div className="item__action">
        <button title="info" className="item__action--info">
          <svg>
            <use href={`${icons}#icon-info`}></use>
          </svg>
        </button>
        <div className="info__tooltip">
          <div className="info__tooltip--category">{props.category}</div>
          <div className="info__tooltip--date">{itemCreateDate}</div>
          <div className="info__tooltip--text">{props.text}</div>
        </div>
        <button title="delete" className="item__action--delete">
          <svg>
            <use href={`${icons}#icon-delete`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
}

function generateDate(date) {
  return `${date.getDate()}th ${date.toLocaleString("en-us", {
    month: "long",
  })}, ${date.getFullYear()}`;
}

export default TodoListItem;
