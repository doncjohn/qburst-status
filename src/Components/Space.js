// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const Space = () => {
  const { works } = useContext(statusContext);

  const onClick = () => {
    const workDone = works.map(work => work.name.toString() + '\n');
    const string = `Work Done:\n${workDone
      .toString()
      .trim()
      .replaceAll(',', '')}`;

    console.log(string);
    navigator.clipboard.writeText(string);
  };

  return (
    <>
      <button onClick={onClick}>Space</button>
    </>
  );
};

export default Space;
