// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';
// SVG Import
import { ReactComponent as SpaceSVG } from '../../Styles/svg/space.svg';

const Space = () => {
  const { workdone, setOutput } = useContext(userContext);

  const onClick = () => {
    const workDone = workdone.map(work => work.workdonetext.toString() + '\n#');
    const string = `Work Done:\n${workDone
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
        <SpaceSVG className="svgImage" />
        <p>Space</p>
      </div>
    </>
  );
};

export default Space;
