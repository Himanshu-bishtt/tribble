import styles from './Popup.module.scss';

const Popup = () => {
  const cancelHandler = () => {
    console.log('Popup cancel button clicked');
    return true;
  };

  const deleteHandler = () => {
    console.log('Popup delete button clicked');
    return true;
  };

  return (
    <div className={styles['popup']}>
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

export default Popup;
