import { useState } from 'react';
import css from './registration.module.css';
import { signUp } from 'services/auth-service';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/Auth/auth-thunk';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [info, setInfo] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = info;

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const submit = e => {
    e.preventDefault();

    console.log(info);

    signUp(info)
      .then(() => {
        toast.success('Registration successfuly', { duration: 3000 });
        dispatch(loginThunk({ email, password }))
          .then(() => navigate('/contacts'))
          .catch(() => toast.error('Failed to log in', { duration: 3000 }));
      })
      .catch(() => toast.error('Incorrect input data', { duration: 3000 }));
  };

  return (
    <form className={css.form} onSubmit={submit}>
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
      <label className={css.titleSmall} htmlFor="email">
        Email
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
