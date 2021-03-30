// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const ToDoList = () => {
  const { todos, setTodos } = useContext(statusContext);

  const onClick = e => {
    setTodos(todos.filter(todo => todo.id !== e.target.value));
  };

  return (
    <ul>
      {todos &&
        todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button value={todo.id} onClick={onClick}>
                x
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ToDoList;
