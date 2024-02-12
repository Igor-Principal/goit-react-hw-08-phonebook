import css from './header.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelector } from 'store/Auth/authSelector';

function Header() {
  const { profile } = useSelector(authSelector);

  return (
    <header>
      <div className={` ${css.header} "container"`}>
        <NavLink className={css.link} to={profile ? '/contacts' : '/'}>
          Home
        </NavLink>
        <div>
          {profile && <UserMenu name={profile.name} />}
          {!profile && (
            <>
              <NavLink className={`${css.link} ${css.regPart}`} to="/register">
                Register
              </NavLink>
              <NavLink className={`${css.link} ${css.regPart}`} to="/login">
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
