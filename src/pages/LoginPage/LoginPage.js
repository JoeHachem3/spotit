import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/actions';
import SpotifyLogin from '../../components/SpotifyLogin/SpotifyLogin';
import classes from './LoginPage.module.css';

const LoginPage = (props) => {
  // public states
  const accessToken = useSelector((state) => state.accessToken);

  // dispatch
  const dispatch = useDispatch();
  const setAccessToken = useCallback(
    (accessToken, expiresAt) =>
      dispatch(actions.setAccessToken(accessToken, expiresAt)),
    [dispatch],
  );
  const removeAccessToken = useCallback(
    () => dispatch(actions.removeAccessToken()),
    [dispatch],
  );

  useEffect(() => {
    if (!accessToken) {
      const params = new URLSearchParams(props.location.hash.replace('#', '?'));
      const accessTokenParam = params.get('access_token');
      if (accessTokenParam) {
        const date = new Date().getTime();
        const expiresInParam = parseInt(params.get('expires_in')) * 1000;
        const expiresAt = date + expiresInParam;
        setAccessToken(accessTokenParam, expiresAt);
        props.history.replace('/artists');
      }
    } else props.history.replace('/artists');
  }, [props, accessToken, setAccessToken, removeAccessToken]);
  return (
    <section className={classes.LoginPage}>
      <h1 className={classes.welcome}>
        <span>Welcome to Spotit,</span> Get started here
      </h1>
      <SpotifyLogin href='https://accounts.spotify.com/authorize?client_id=6499b09693a64a09ae4d961182500473&redirect_uri=http://localhost:3000/login&response_type=token&state=123' />
    </section>
  );
};

export default LoginPage;
