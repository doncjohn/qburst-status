import { useState, useEffect } from "react";

// Components
import Header from "./Components/Header";
import Body from "./Components/Body";
import CopyButtons from "./Components/CopyButtons";

// Context
import statusContext from "./Context/statusContext";

const App = () => {
  // Header Logic
  const date = new Date();
  const day = ("0" + date.getDate()).slice(-2);
  // prettier-ignore
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dateString = `${
    monthNames[date.getMonth()]
  } ${day}, ${date.getFullYear()}`;
  const subject = `Status Report - ${dateString} [Koratty]`;

  // Project Logic
  const [project, setProject] = useState("N/A");
  useEffect(() => {
    const projectObj = localStorage.getItem("project");
    if (projectObj) setProject(JSON.parse(projectObj));
  }, []);

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  // WorkDone Logic
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const worksObj = localStorage.getItem("works");
    if (worksObj) setWorks(JSON.parse(worksObj));
  }, []);

  useEffect(() => {
    localStorage.setItem("works", JSON.stringify(works));
  }, [works]);

  // ToDo Logic
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todosObj = localStorage.getItem("todos");
    if (todosObj) setTodos(JSON.parse(todosObj));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CopyButtons Logic
  const [email, setEmail] = useState("");
  const [hangout, setHangout] = useState("");
  const [space, setSpace] = useState("");
  const [button, setButton] = useState("");

  return (
    <div className="App">
      <statusContext.Provider
        value={{
          dateString,
          subject,
          project,
          setProject,
          works,
          setWorks,
          todos,
          setTodos,
          email,
          setEmail,
          hangout,
          setHangout,
          space,
          setSpace,
          button,
          setButton,
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
