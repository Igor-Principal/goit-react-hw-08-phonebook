import { useState } from 'react';
import css from './login.module.css';

function Login() {
  const [info, setInfo] = useState({ login: '', password: '' });
  const { login, password } = info;

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const logIn = e => {
    e.preventDefault();

    setInfo({
      login: '',
      password: '',
    });
  };

  return (
    <form className={css.form} onSubmit={logIn}>
      <label className={css.titleSmall} htmlFor="name">
        Login
      </label>
      <input
        className={css.input}
        type="text"
        id="login"
        name="login"
        required
        value={login}
        onChange={handleChange}
      />
      <label className={css.titleSmall} htmlFor="number">
        Password
      </label>
      <input
        className={css.input}
        type="password"
        name="password"
        id="password"
        required
        value={password}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Log in
      </button>
    </form>
  );
}

export default Login;
