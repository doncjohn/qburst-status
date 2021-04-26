// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as HangoutsSVG } from '../../Styles/svg/hangouts.svg';

const Hangout = () => {
  const { workdone, todo, setOutput } = useContext(userContext);
  const onClick = () => {
    const workDone = workdone.map(work => work.workdonetext.toString() + '\n#');
    const toDo = todo.map(todo => todo.todotext.toString() + '\n#');

    const string = `Clock Off\n\nWork Done:\n${workDone
      .toString()
      .trim()
      .replaceAll('#,', '')
      .replaceAll('#', '')}\nTo Do:\n${toDo
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
        <HangoutsSVG className="svgImage" />
        <p>Hangouts</p>
      </div>
    </>
  );
};

export default Hangout;
