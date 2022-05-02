import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return <div> 
    <h1>My Todos</h1>
    <Todo title='learn react' />
    <Todo title='master react' />
    <Todo title='explore react' />
  </div>;
}

export default App;
