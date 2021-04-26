// Context
import { useContext, useState } from 'react';
import userContext from '../../Context/userContext';

// SVG Import
import { ReactComponent as UpdateSVG } from '../../Styles/svg/update.svg';

const Project = () => {
  const { user, project, setProject } = useContext(userContext);
  const { token } = user;
  const [projectText, setProjectText] = useState(project);

  const fetchChangeProject = async projectText => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ project: projectText }),
    };
    await fetch(`http://localhost:1212/project`, requestOptions);
  };

  const onChange = e => setProjectText(e.target.value);

  const onUpdate = async e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      setProject(projectText);
      await fetchChangeProject(projectText);
    }
  };

  return (
    <div className="project">
      <p className="project__title">Project</p>
      <input
        className="project__input"
        onChange={e => onChange(e)}
        onKeyPress={e => onUpdate(e)}
        type="text"
        value={projectText}
      />
      <button className="button" onClick={e => onUpdate(e)}>
        <UpdateSVG className="svgImage__large" />
      </button>
    </div>
  );
};

export default Project;
