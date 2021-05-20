import React from 'react';
import logo from '../../assets/imgs/spotifyLogo.svg';
import classes from './SpotifyLogin.module.css';

const SpotifyLogin = (props) => {
  return (
    <a href={props.href} className={classes.SpotifyLogin}>
      <span>Login with Spotify</span>
      <img src={logo} alt='Spotify logo' />
    </a>
  );
};

export default SpotifyLogin;
