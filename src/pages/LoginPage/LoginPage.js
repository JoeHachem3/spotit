import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authUrl } from '../../api/requests';
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
      <SpotifyLogin href={authUrl} />
    </section>
  );
};

export default LoginPage;
