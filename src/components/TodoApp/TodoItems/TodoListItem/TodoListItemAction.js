import React, { useState } from 'react';
import Modal from '../../../UI/Modal';

import icons from '../../../../static/icons/icons.svg';
import styles from './TodoListItemAction.module.scss';

const TodoListItemAction = props => {
  const [modal, showModal] = useState(false);

  const deleteHandler = () => {
    showModal(prev => !prev);
  };

  const deleteButtonHandler = flag => {
    flag && props.onItemDelete(props.id) && showModal(prev => !prev);
  };

  return (
    <React.Fragment>
      {modal && <Modal onCancel={showModal} onDelete={deleteButtonHandler} />}
      <div className={styles['item__action']}>
        <button title="info" className={styles['item__action--info']}>
          <svg>
            <use href={`${icons}#icon-info`}></use>
          </svg>
        </button>
        <div className={styles['info__tooltip']}>
          <div
            className={`${styles['info__tooltip--category']} ${
              styles[props.category.toLowerCase()]
            }`}
          >
            {props.category}
          </div>
          <div className={styles['info__tooltip--date']}>
            Created: {props.itemCreateDate}
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
    </React.Fragment>
  );
};

export default TodoListItemAction;
