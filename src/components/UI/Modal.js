import styles from './Modal.module.scss';

const Modal = props => {
  const cancelHandler = () => {
    props.onCancel(prev => !prev);
  };

  const deleteHandler = () => {};
  return (
    <div>
      <div className={styles['backdrop']} onClick={cancelHandler}></div>
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
    </div>
  );
};

export default Modal;
