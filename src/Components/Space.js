// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as SpaceSVG } from '../Styles/svg/space.svg';

const Space = () => {
  const { works, setSpace, setButton } = useContext(statusContext);

  const onClick = () => {
    const workDone = works.map(work => work.name.toString() + '\n');
    const string = `Work Done:\n${workDone
      .toString()
      .trim()
      .replaceAll(',', '')}`;

    setSpace(string);
    setButton('space');
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
