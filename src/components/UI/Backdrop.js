import styles from './Backdrop.module.scss';

const Backdrop = props => {
  const backdropHandler = () => {
    props.onBackdropClick(true);
  };

  return (
    <div
      className={`${styles['backdrop']} ${styles[props.className]}`}
      onClick={backdropHandler}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
