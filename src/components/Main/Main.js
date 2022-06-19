import { useState } from 'react';
import Header from '../Header/Header';
import Todo from '../Todo/Todo';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const todoItemDeleteButtonHandler = flag => {
    setShowModal(prev => !prev);
  };

  // const modalCancelButtonHandler = flag => {
  //   console.log(flag);
  // };

  // const modalDeleteButtonHandler = flag => {
  //   console.log(flag);
  // };

  return (
    <div className="app">
      <Header />
      <Todo onTodoItemDeleteClick={todoItemDeleteButtonHandler} />
      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onCancel={modalCancelButtonHandler}
        onDelete={modalDeleteButtonHandler}
      /> */}
    </div>
  );
};

export default Main;
