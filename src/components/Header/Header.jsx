import css from './header.module.css';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <NavLink className={css.link} to="/home">
        Home
      </NavLink>
      <div>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
