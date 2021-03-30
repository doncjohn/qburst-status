// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const Hangout = () => {
  const { works, todos } = useContext(statusContext);

  const onClick = () => {
    const workDone = works.map(work => work.name.toString() + '\n');
    const toDo = todos.map(todo => todo.name.toString() + '\n');

    const string = `Clock Off\n\nWork Done:\n${workDone
      .toString()
      .trim()
      .replaceAll(',', '')}\n\nTo Do:\n${toDo
      .toString()
      .trim()
      .replaceAll(',', '')}`;

    console.log(string);
    navigator.clipboard.writeText(string);
  };

  return (
    <>
      <button onClick={onClick}>Hangout</button>
    </>
  );
};

export default Hangout;
