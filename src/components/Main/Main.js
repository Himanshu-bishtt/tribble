import Header from '../Header/Header';
import Todo from '../Todo/Todo';
import Backdrop from '../UI/Backdrop';
import Popup from '../UI/Popup';

const Main = () => {
  return (
    <div className="app">
      <Header />
      <Todo />
      <Popup />
      <Backdrop />
    </div>
  );
};

export default Main;
