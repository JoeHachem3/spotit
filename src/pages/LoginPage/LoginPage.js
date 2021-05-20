import React from 'react';
import { authUrl } from '../../api/requests';
import SpotifyLogin from '../../components/SpotifyLogin/SpotifyLogin';
import classes from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section className={classes.LoginPage}>
      <h1 className={classes.welcome}>
        <span>Welcome to Spotit,</span> Get started here
      </h1>
      <SpotifyLogin href={authUrl} />
    </section>
  );
};

export default LoginPage;
