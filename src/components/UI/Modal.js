import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = props => {
  const cancelHandler = () => {
    props.onCancel(prev => !prev);
  };

  const deleteHandler = () => {
    props.onDelete(true);
  };

  const Backdrop = () => {
    return <div className={styles['backdrop']} onClick={cancelHandler}></div>;
  };

  const Overlay = () => {
    return (
      <div className={`${styles['popup']} `}>
        <div className={styles['popup__message']}>Are you sure?</div>
        <div className={styles['popup__button']}>
          <button
            className={`${styles['popup__button--cancel']} btn`}
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button
            className={`${styles['popup__button--ok']} btn`}
            onClick={deleteHandler}
          >
            Delete Item
          </button>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay'))}
    </React.Fragment>
  );
};

export default Modal;
