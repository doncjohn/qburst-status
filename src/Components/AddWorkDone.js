// State & Context
import { useState, useContext } from 'react';
import statusContext from '../Context/statusContext';

import { uid } from 'uid';

const AddWorkDone = () => {
  const { works, setWorks } = useContext(statusContext);

  const [work, setwork] = useState('');
  const onChange = e => {
    setwork(e.target.value);
  };

  const onClick = async e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      const id = uid();
      setWorks([...works, { id, name: work }]);
    }
  };

  return (
    <div>
      <input
        onChange={e => onChange(e)}
        onKeyPress={e => onClick(e)}
        type="text"
        value={work}
        placeholder="Add New Work Done"
      />
      <button onClick={e => onClick(e)}>Add</button>
    </div>
  );
};

export default AddWorkDone;
