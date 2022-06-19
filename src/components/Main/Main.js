import { useState } from 'react';
import Header from '../Header/Header';
import Todo from '../Todo/Todo';
import Modal from '../UI/Modal';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const todoItemDeleteButtonHandler = flag => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="app">
      <Header />
      <Todo onTodoItemDeleteClick={todoItemDeleteButtonHandler} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Main;
