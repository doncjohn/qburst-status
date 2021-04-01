// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as CloseSVG } from '../Styles/svg/close.svg';

const ToDoList = () => {
  const { todos, setTodos } = useContext(statusContext);

  const onClick = e => {
    setTodos(
      todos.filter(todo => todo.id !== e.target.closest('button').value)
    );
  };

  return (
    <ul>
      {todos &&
        todos.map(todo => {
          return (
            <li className="list" key={todo.id}>
              {todo.name}
              <button className="button" value={todo.id} onClick={onClick}>
                <CloseSVG />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ToDoList;
