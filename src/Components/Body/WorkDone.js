//Components
import AddWorkDone from './AddWorkDone';
import WorkDoneList from './WorkDoneList';

const WorkDone = () => {
  return (
    <div className="workDone">
      <p className="workDone__title">Work Done</p>
      <AddWorkDone />
      <WorkDoneList />
    </div>
  );
};

export default WorkDone;
