// Context
import { useContext } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as CloseSVG } from '../../Styles/svg/close.svg';

const WorkDoneList = () => {
  const { user, workdone, fetchWorkdones } = useContext(userContext);
  const { token } = user;

  const onClickDelete = async e => {
    const workdoneid = e.target.closest('button').value;
    console.log(workdoneid);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ workdoneid }),
    };
    await fetch(`http://localhost:1212/workdone/delete`, requestOptions);
    await fetchWorkdones(token);
  };

  return (
    <ul className="list__container">
      {workdone &&
        workdone.map(work => {
          return (
            <li className="list" key={work.workdoneid}>
              {work.workdonetext}
              <button
                className="button"
                value={work.workdoneid}
                onClick={e => onClickDelete(e)}
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
