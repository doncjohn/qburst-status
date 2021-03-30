// Context
import { useContext, useEffect, useState } from 'react';
import statusContext from '../Context/statusContext';

const Project = () => {
  const { project, setProject } = useContext(statusContext);
  const [projectText, setProjectText] = useState(project);

  useEffect(() => {
    setProjectText(project);
  }, [project]);

  const onChange = e => setProjectText(e.target.value);
  const onClick = e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      setProject(projectText);
    }
  };
  const onReset = e => {
    setProjectText('N/A');
    setProject('N/A');
  };

  return (
    <div>
      <p>Project</p>
      <input
        onChange={e => onChange(e)}
        onKeyPress={e => onClick(e)}
        type="text"
        value={projectText}
      />
      <button onClick={e => onClick(e)}>Update</button>
      {projectText !== 'N/A' && (
        <button onClick={e => onReset(e)}>Reset</button>
      )}
    </div>
  );
};

export default Project;
