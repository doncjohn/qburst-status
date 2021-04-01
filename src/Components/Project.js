// Context
import { useContext, useEffect, useState } from 'react';
import statusContext from '../Context/statusContext';

// SVG Import
import { ReactComponent as ResetSVG } from '../Styles/svg/reset.svg';
import { ReactComponent as UpdateSVG } from '../Styles/svg/update.svg';

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
    <div className="project">
      <p className="project__title">Project</p>
      <input
        className="project__input"
        onChange={e => onChange(e)}
        onKeyPress={e => onClick(e)}
        type="text"
        value={projectText}
      />
      {projectText !== 'N/A' && (
        <>
          <button className="button" onClick={e => onClick(e)}>
            <UpdateSVG className="svgImage__large" />
          </button>
          <button className="button" onClick={e => onReset(e)}>
            <ResetSVG className="svgImage__large" />
          </button>
        </>
      )}
    </div>
  );
};

export default Project;
