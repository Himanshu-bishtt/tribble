import icons from '../../static/icons/icons.svg';
import styles from './TodoListItem.module.scss';

function TodoListItem(props) {
  const endDate = generateDate(props.endDate);

  const itemCreateDate = generateDate(props.date);

  const deleteHandler = () => {
    // window.confirm('Are you sure?')
    //   ? props.onTodoDelete(props.id)
    //   : alert('You cancelled');
    // props.onTodoDelete(event.target.closest('.todo__list--item').dataset.id);

    props.onDeleteButtonClicked(true);
  };

  let category;

  if (props.category === 'Important') category = 'important';
  if (props.category === 'Sports') category = 'sports';
  if (props.category === 'Entertainment') category = 'entertainment';

  return (
    <li
      className={`${styles['todo__list--item']} ${styles[category]}`}
      data-id={props.id}
    >
      <p className={styles['item__name']} title={props.name}>
        {props.name}
      </p>

      <div className={`${styles['item__date']} ${styles[category]}`}>
        <svg>
          <use href={`${icons}#icon-calendar`}></use>
        </svg>
        <p>{endDate}</p>
      </div>

      <div className={styles['item__action']}>
        <button title="info" className={styles['item__action--info']}>
          <svg>
            <use href={`${icons}#icon-info`}></use>
          </svg>
        </button>
        <div className={styles['info__tooltip']}>
          <div
            className={`${styles['info__tooltip--category']} ${styles[category]}`}
          >
            {props.category}
          </div>
          <div className={styles['info__tooltip--date']}>
            Created: {itemCreateDate}
          </div>
          <div className={styles['info__tooltip--text']}>
            {props.text || 'No info provided.'}
          </div>
        </div>
        <button
          title="delete"
          className={styles['item__action--delete']}
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
  return `${String(date.getDate()).padStart(2, 0)}th ${date.toLocaleString(
    'en-us',
    {
      month: 'long',
    }
  )}, ${date.getFullYear()}`;
}

export default TodoListItem;
