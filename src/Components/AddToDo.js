// State & Context
import { useState, useContext } from 'react';
import statusContext from '../Context/statusContext';

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
      setTodos([...todos, { id, name: todo }]);
    }
  };

  return (
    <div>
      <input
        onChange={e => onChange(e)}
        onKeyPress={e => onClick(e)}
        type="text"
        value={todo}
        placeholder="Add New To Do"
      />
      <button onClick={e => onClick(e)}>Add</button>
    </div>
  );
};

export default AddToDo;
