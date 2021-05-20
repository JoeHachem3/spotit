import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/actions';
import classes from './Logout.module.css';

const Logout = (props) => {
  const dispatch = useDispatch();
  const removeAccessToken = () => dispatch(actions.removeAccessToken());

  return (
    <Link
      to={'/'}
      className={[classes.Logout, classes[props.className]].join(' ')}
      onClick={removeAccessToken}
    >
      Logout
    </Link>
  );
};

export default Logout;
