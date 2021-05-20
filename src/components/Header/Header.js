import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/spotifyLogo.svg';
import Logout from '../Logout/Logout';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <nav className={classes.Header}>
      <Link to={'/'} className={classes.Logo}>
        <img src={logo} alt='' />
        <h1>Spotit</h1>
      </Link>
      {props.accessToken ? <Logout className={'header'} /> : null}
    </nav>
  );
};

export default Header;
