import Backdrop from './Backdrop';
import styles from './Modal.module.scss';

const Modal = ({ showModal, setShowModal }) => {
  const cancelHandler = () => {
    console.log('Popup cancel button clicked');
    setShowModal(false);

    return false;
  };

  const deleteHandler = () => {
    console.log('Popup delete button clicked');
    return true;
  };

  const backdropHandler = condition => {
    setShowModal(!condition);
  };

  return (
    <div>
      <div
        className={`${styles['popup']} ${
          showModal ? '' : styles['popup__remove']
        }`}
      >
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
      <Backdrop
        className={showModal ? '' : 'backdrop__remove'}
        onBackdropClick={backdropHandler}
      />
    </div>
  );
};

export default Modal;
