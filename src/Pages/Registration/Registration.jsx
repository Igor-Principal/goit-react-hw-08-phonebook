import { useState } from 'react';
import css from './registration.module.css';

function Login() {
  const [info, setInfo] = useState({ name: '', login: '', password: '' });
  const { name, login, password } = info;

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const logIn = e => {
    e.preventDefault();

    setInfo({
      name: '',
      login: '',
      password: '',
    });
  };

  return (
    <form className={css.form} onSubmit={logIn}>
      <label className={css.titleSmall} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={css.titleSmall} htmlFor="login">
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
      <label className={css.titleSmall} htmlFor="password">
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
