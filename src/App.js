import { useState, useEffect } from 'react';

// Components
import Header from './Components/Header';
import Body from './Components/Body';
import CopyButtons from './Components/CopyButtons';

// Context
import statusContext from './Context/statusContext';

const App = () => {
  // Header Logic
  const date = new Date();
  // prettier-ignore
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const subject = `Status Report - ${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} (Koratty)`;

  // Project Logic
  const [project, setProject] = useState('N/A');
  useEffect(() => {
    const projectObj = localStorage.getItem('project');
    if (projectObj) setProject(JSON.parse(projectObj));
  }, []);

  useEffect(() => {
    localStorage.setItem('project', JSON.stringify(project));
  }, [project]);

  // WorkDone Logic
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const worksObj = localStorage.getItem('works');
    if (worksObj) setWorks(JSON.parse(worksObj));
  }, []);

  useEffect(() => {
    localStorage.setItem('works', JSON.stringify(works));
  }, [works]);

  // ToDo Logic
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todosObj = localStorage.getItem('todos');
    if (todosObj) setTodos(JSON.parse(todosObj));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <statusContext.Provider
        value={{
          subject,
          project,
          setProject,
          works,
          setWorks,
          todos,
          setTodos,
        }}
      >
        <Header />
        <Body />
        <CopyButtons />
      </statusContext.Provider>
    </div>
  );
};

export default App;
