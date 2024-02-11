import { useState } from 'react';
import css from './login.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/Auth/auth-thunk';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = info;

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const submit = e => {
    e.preventDefault();
    dispatch(loginThunk(info))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        setInfo({
          email: '',
          password: '',
        });
      })
      .catch(() =>
        toast.error('Incorrect email address or password', {
          duration: 3000,
        })
      );
  };

  return (
    <>
      <h2 className={css.title}>You are welcome!</h2>
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
    </>
  );
}

export default Login;
