import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import Button from './Button';

import styles from './Modal.module.scss';

const Modal = props => {
  const cancelHandler = () => {
    props.onCancel(prev => !prev);
  };

  const deleteHandler = () => {
    props.onDelete(true);
  };

  const Overlay = () => {
    return (
      <div className={`${styles['popup']} `}>
        <div className={styles['popup__message']}>Are you sure?</div>
        <div className={styles['popup__button']}>
          <Button
            className={styles['popup__button--cancel']}
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <Button
            className={styles['popup__button--ok']}
            onClick={deleteHandler}
          >
            Delete Item
          </Button>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Backdrop onClick={cancelHandler} />
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
    </React.Fragment>
  );
};

export default Modal;
