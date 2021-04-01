// State & Context
import { useState, useContext } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as AddSVG } from '../Styles/svg/add.svg';

import { uid } from 'uid';

const AddToDo = () => {
  const { todos, setTodos } = useContext(statusContext);

  const [todo, setTodo] = useState('');
  const onChange = e => {
    setTodo(e.target.value);
  };

  const onClick = async e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      const id = uid();
      if (todo) setTodos([...todos, { id, name: todo }]);
      setTodo('');
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
