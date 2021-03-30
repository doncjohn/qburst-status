// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const Email = () => {
  const { dateString, subject, project, works, todos } = useContext(
    statusContext
  );

  const onClick = () => {
    const workDone = works.map(work => work.name.toString() + '\n');
    const toDo = todos.map(todo => todo.name.toString() + '\n');

    const string = `${subject}\n\nProject: ${project}\nDate: ${dateString}\n\nWork Done:\n${workDone
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
      <button onClick={onClick}>Email</button>
    </>
  );
};

export default Email;
