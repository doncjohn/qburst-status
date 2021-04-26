//Components
import Project from './Project';
import WorkDone from './WorkDone';
import ToDo from './ToDo';
import Output from './Output';

const Body = () => {
  return (
    <div className="body">
      <div className="body__sub">
        <Project />
        <WorkDone />
        <ToDo />
      </div>
      <Output />
    </div>
  );
};

export default Body;
