import { useEffect, useState } from 'react';
import css from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'store/Auth/auth-thunk';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });
  const isAuth = useSelector(state => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = info;

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const submit = e => {
    e.preventDefault();

    dispatch(loginThunk(info));

    setInfo({
      email: '',
      password: '',
    });
  };

  return (
    <form className={css.form} onSubmit={submit}>
      <label className={css.titleSmall} htmlFor="email">
        Login
      </label>
      <input
        className={css.input}
        type="text"
        id="email"
        name="email"
        required
        value={email}
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
