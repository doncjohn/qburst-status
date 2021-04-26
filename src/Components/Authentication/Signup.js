import { useState } from 'react';

const Signup = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSignUp = async e => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage('Missing Values');
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    };
    const res = await fetch(
      `http://localhost:1212/users/signup`,
      requestOptions
    );
    const result = await res.json();

    console.log(result);

    if (result.succesful) history.push('/');
    else setMessage(result.message);
  };

  return (
    <div className="signup">
      <p className="signup__text">QBS - Sign Up</p>{' '}
      {message && <p className="login__message">{message}</p>}
      <form className="signup">
        <input
          className="signup__input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          className="signup__input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          className="signup__input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <input
          type="submit"
          className="button signup__button"
          onClick={e => onSignUp(e)}
          value="Sign Up"
        />
      </form>
      <p className="signup__login__text">
        Already have account?
        <a className="signup__login__link" href="/">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
