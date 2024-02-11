import css from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from 'store/Auth/authSlice';
import { delToken } from 'services/auth-service';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const { profile } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    delToken();
    navigate('/');
  };

  return (
    <header className={css.header}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <div>
        {profile && (
          <div>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
            <p>{profile.name}</p>
            <button onClick={onClick}>Logout</button>
          </div>
        )}
        {!profile && (
          <>
            <NavLink className={css.link} to="/register">
              Register
            </NavLink>
            <NavLink className={css.link} to="/login">
              Log In
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
