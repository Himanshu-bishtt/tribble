import Backdrop from './Backdrop';
import styles from './Modal.module.scss';

const Modal = ({ showModal, setShowModal, onCancel, onDelete }) => {
  const cancelHandler = () => {
    setShowModal(prev => !prev);
    onCancel(false);
  };

  const deleteHandler = () => {
    console.log('Popup delete button clicked');
    setShowModal(prev => !prev);
    onDelete(true);
  };

  const backdropHandler = condition => {
    setShowModal(!condition);
  };

  return (
    <Backdrop
      className={showModal ? '' : 'backdrop__remove'}
      onBackdropClick={backdropHandler}
    >
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
    </Backdrop>
  );
};

export default Modal;
