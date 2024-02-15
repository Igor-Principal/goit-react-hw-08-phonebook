import { useDispatch } from 'react-redux';
import css from './userMenu.module.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginOutThunk } from 'store/Auth/auth-thunk';

const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(loginOutThunk());
    navigate('/');
  };

  return (
    <div className={css.block}>
      <p className={css.text}>{name}</p>
      <button onClick={onClick} className={css.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
