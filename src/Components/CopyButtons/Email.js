// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as EmailSVG } from '../../Styles/svg/gmail.svg';

const Email = () => {
  const {
    workdone,
    todo,
    project,
    dateString,
    subject,
    setOutput,
  } = useContext(userContext);

  const onClick = () => {
    const workDone = workdone.map(work => work.workdonetext.toString() + '\n#');
    const toDo = todo.map(todo => todo.todotext.toString() + '\n#');

    const string = `${subject}\n\nProject: ${project}\nDate: ${dateString}\n\nWork Done:\n${workDone
      .toString()
      .trim()
      .replaceAll('#,', '')
      .replaceAll('#', '')}\n\nTo Do:\n${toDo
      .toString()
      .trim()
      .replaceAll('#,', '')
      .replaceAll('#', '')}`;

    setOutput(string);
    navigator.clipboard.writeText(string);
  };

  return (
    <>
      <div className="button__copy" onClick={onClick}>
        <EmailSVG className="svgImage" />
        <p>Email</p>
      </div>
    </>
  );
};

export default Email;
