import icons from '../../static/icons/icons.svg';
import './TodoListItem.scss';

import styled from 'styled-components';

const ItemName = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 30em) {
    font-size: 0.8rem;
  }
`;

const ItemDate = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-size: 1rem;
    margin: 0 0.2rem;

    @media only screen and (max-width: 30em) {
      font-size: 0.8rem;
    }
  }

  & svg {
    height: 1.3rem;
    width: 1.3rem;
    fill: var(--color-1);

    @media only screen and (max-width: 30em) {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

function TodoListItem(props) {
  const endDate = generateDate(props.endDate);

  const itemCreateDate = generateDate(props.date);

  const deleteHandler = event => {
    props.onTodoDelete(event.target.closest('.todo__list--item').dataset.id);
  };

  return (
    <li className="todo__list--item" data-id={props.id}>
      {/* <p className="item__name">{props.name}</p> */}
      <ItemName>{props.name}</ItemName>

      {/* <div className="item__date">
        <svg>
          <use href={`${icons}#icon-calendar`}></use>
        </svg>
        <p>{endDate}</p>
      </div> */}

      <ItemDate>
        <svg>
          <use href={`${icons}#icon-calendar`}></use>
        </svg>
        <p>{endDate}</p>
      </ItemDate>

      <div className="item__action">
        <button title="info" className="item__action--info">
          <svg>
            <use href={`${icons}#icon-info`}></use>
          </svg>
        </button>
        <div className="info__tooltip">
          <div className="info__tooltip--category">{props.category}</div>
          <div className="info__tooltip--date">Created: {itemCreateDate}</div>
          <div className="info__tooltip--text">{props.text}</div>
        </div>
        <button
          title="delete"
          className="item__action--delete"
          onClick={deleteHandler}
        >
          <svg>
            <use href={`${icons}#icon-delete`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
}

function generateDate(date) {
  return `${date.getDate()}th ${date.toLocaleString('en-us', {
    month: 'long',
  })}, ${date.getFullYear()}`;
}

export default TodoListItem;
