import { useDispatch } from 'react-redux';
import css from './userMenu.module.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'store/Auth/authSlice';
import { delToken } from 'services/auth-service';

const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    delToken();
    navigate('/');
  };

  return (
    <div className={css.block}>
      <p className={css.name}>{name}</p>
      <button onClick={onClick} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
