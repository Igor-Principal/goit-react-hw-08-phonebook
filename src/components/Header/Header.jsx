import css from './header.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

function Header() {
  const { profile } = useSelector(state => state.auth);

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
