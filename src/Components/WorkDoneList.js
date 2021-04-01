// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as CloseSVG } from '../Styles/svg/close.svg';

const WorkDoneList = () => {
  const { works, setWorks } = useContext(statusContext);

  const onClick = e => {
    setWorks(
      works.filter(work => work.id !== e.target.closest('button').value)
    );
  };

  return (
    <ul>
      {works &&
        works.map(work => {
          return (
            <li className="list" key={work.id}>
              {work.name}
              <button
                className="button"
                value={work.id}
                onClick={e => onClick(e)}
              >
                <CloseSVG />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default WorkDoneList;
