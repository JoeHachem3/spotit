import React, { useEffect, useCallback } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage/LoginPage';
import ArtistsPage from './pages/ArtistsPage/ArtistsPage';
import AlbumsPage from './pages/AlbumsPage/AlbumsPage';
import Header from './components/Header/Header';
import * as actions from './store/actions/actions';
const App = () => {
  // public states
  const accessToken = useSelector((state) => state.accessToken);

  // dispatch
  const dispatch = useDispatch();
  const setAccessToken = useCallback(
    (accessTokenParam, expiresAt) =>
      dispatch(actions.setAccessToken(accessTokenParam, expiresAt)),
    [dispatch],
  );
  const removeAccessToken = useCallback(
    () => dispatch(actions.removeAccessToken()),
    [dispatch],
  );
  const setTimeOutId = useCallback(
    (timeOutId) => dispatch(actions.setTimeOutId(timeOutId)),
    [dispatch],
  );

  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!accessToken) {
      const params = new URLSearchParams(pathname.replace('/', '?'));
      const accessTokenParam = params.get('access_token');
      if (accessTokenParam) {
        const date = new Date().getTime();
        const expiresInParam = parseInt(params.get('expires_in')) * 1000;
        const expiresAt = date + expiresInParam;
        const timeOutId = setTimeout(() => {
          removeAccessToken();
        }, expiresInParam);
        setTimeOutId(timeOutId);
        setAccessToken(accessTokenParam, expiresAt);
      }
    } else {
      const expiresAt = localStorage.getItem('expiresAt');
      const date = new Date().getTime();

      const timeOutId = setTimeout(() => {
        removeAccessToken();
      }, expiresAt - date);
      setTimeOutId(timeOutId);
    }
  }, [accessToken, pathname, setAccessToken, removeAccessToken, setTimeOutId]);
  return (
    <>
      <Header accessToken={accessToken} />
      <Switch>
        <Route
          exact
          path='/'
          component={accessToken ? ArtistsPage : LoginPage}
        />
        <Route exact path='/artists/:id/albums' component={AlbumsPage} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
      {accessToken ? null : <Redirect to='/' />}
    </>
  );
};

export default withRouter(App);
