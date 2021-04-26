// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as CloseSVG } from '../../Styles/svg/close.svg';

const ToDoList = () => {
  const { user, todo, fetchTodos } = useContext(userContext);
  const { token } = user;

  const onClickDelete = async e => {
    const todoid = e.target.closest('button').value;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ todoid }),
    };
    await fetch(`http://localhost:1212/todo/delete`, requestOptions);
    await fetchTodos(token);
  };

  return (
    <ul className="list_container">
      {todo &&
        todo.map(todo => {
          return (
            <li className="list" key={todo.todoid}>
              {todo.todotext}
              <button
                className="button"
                value={todo.todoid}
                onClick={onClickDelete}
              >
                <CloseSVG />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ToDoList;
