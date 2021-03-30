// Context
import { useContext } from 'react';
import statusContext from '../Context/statusContext';

const WorkDoneList = () => {
  const { works, setWorks } = useContext(statusContext);

  const onClick = e => {
    setWorks(works.filter(work => work.id !== e.target.value));
  };

  return (
    <ul>
      {works &&
        works.map(work => {
          return (
            <li key={work.id}>
              {work.name}
              <button value={work.id} onClick={e => onClick(e)}>
                x
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default WorkDoneList;
