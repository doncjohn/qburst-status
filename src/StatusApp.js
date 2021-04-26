import { useState } from 'react';
import AppBody from './Components/AppBody';

// Context
import userContext from './Context/userContext';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const Login = () => {
  // Header Logic
  const date = new Date();
  const day = ('0' + date.getDate()).slice(-2);
  // prettier-ignore
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dateString = `${
    monthNames[date.getMonth()]
  } ${day}, ${date.getFullYear()}`;
  const subject = `Status Report - ${dateString} (Koratty)`;

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({ email: '', userid: '', token: '' });
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [workdone, setWorkdone] = useState([]);
  const [todo, setTodo] = useState([]);
  const [project, setProject] = useState('');
  const [output, setOutput] = useState(
    'Please click Buttons to view the copied text.'
  );

  const fetchWorkdones = async token => {
    const str = `Bearer ${token}`;
    const requestOptions2 = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: str,
      },
    };
    const res = await fetch(`http://localhost:1212/workdone`, requestOptions2);

    const { result } = await res.json();
    setWorkdone(result);
  };

  const fetchTodos = async token => {
    const str = `Bearer ${token}`;
    const requestOptions2 = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: str,
      },
    };
    const res = await fetch(`http://localhost:1212/todo`, requestOptions2);

    const { result } = await res.json();
    setTodo(result);
  };

  const onClickLogin = async e => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const res = await fetch(
      `http://localhost:1212/users/login`,
      requestOptions
    );
    const result = await res.json();
    setUser(result);
    setProject(result.project);

    await fetchWorkdones(result.token);
    await fetchTodos(result.token);

    res.ok ? setLogin(true) : setMessage(result.message);
  };

  return (
    <>
      {login ? (
        <userContext.Provider
          value={{
            user,
            workdone,
            fetchWorkdones,
            todo,
            fetchTodos,
            project,
            setProject,
            dateString,
            subject,
            output,
            setOutput,
          }}
        >
          <AppBody />
        </userContext.Provider>
      ) : (
        <div className="login">
          <p className="login__text">QBS - Log In</p>
          {message && <p className="login__message">{message}</p>}
          <form className="login" onSubmit={e => onClickLogin(e)}>
            <input
              className="login__input"
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="login__input"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="button login__button"
              onClick={e => onClickLogin(e)}
              value="Login"
            />
          </form>
          <p className="login__signup__text">
            Don't have an account?
            <a className="login__signup__link" href="/signup">
              Signup
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
