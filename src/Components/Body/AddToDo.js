// State & Context
import { useState, useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as AddSVG } from '../../Styles/svg/add.svg';

import { uid } from 'uid';

const AddToDo = () => {
  const { user, fetchTodos } = useContext(userContext);
  const { token } = user;

  const fetchAddTodos = async (todoid, todotext) => {
    const str = `Bearer ${token}`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: str,
      },
      body: JSON.stringify({ todoid, todotext }),
    };
    await fetch(`http://localhost:1212/todo/add`, requestOptions);
  };

  const [todo, setTodo] = useState('');
  const onChange = e => {
    setTodo(e.target.value);
  };

  const onClick = async e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      const id = uid();
      await fetchAddTodos(id, todo);
      setTodo('');
      await fetchTodos(token);
    }
  };

  return (
    <div className="addInput">
      <input
        className="addInput__input"
        onChange={e => onChange(e)}
        onKeyPress={e => onClick(e)}
        type="text"
        value={todo}
        placeholder="Add New To Do"
      />
      <button className="button" onClick={e => onClick(e)}>
        <AddSVG />
      </button>
    </div>
  );
};

export default AddToDo;
