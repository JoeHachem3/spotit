import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/actions';
import classes from './Logout.module.css';

const Logout = (props) => {
  const dispatch = useDispatch();
  const removeAccessToken = () => dispatch(actions.removeAccessToken());
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiresAt');
    removeAccessToken();
  };

  return (
    <button
      className={[classes.Logout, classes[props.className]].join(' ')}
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default Logout;
