//Components
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const ToDo = () => {
  return (
    <div className="todo">
      <p className="todo__title">To Do</p>
      <AddToDo />
      <ToDoList />
    </div>
  );
};

export default ToDo;
