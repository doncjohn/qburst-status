// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as EmailSVG } from '../Styles/svg/gmail.svg';

const Email = () => {
  const {
    dateString,
    subject,
    project,
    works,
    todos,
    setEmail,
    setButton,
  } = useContext(statusContext);

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

    setEmail(string);
    setButton('email');
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
