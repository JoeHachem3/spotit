import React, { useEffect, useState, useCallback } from 'react';
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
  // private states
  const [next, setNext] = useState(null);

  // public states
  const accessToken = useSelector((state) => state.accessToken);

  // dispatch
  const dispatch = useDispatch();

  const removeAccessToken = useCallback(
    () => dispatch(actions.removeAccessToken()),
    [dispatch],
  );

  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!accessToken) {
      if (pathname !== '/login') {
        setNext(<Redirect to='/login' />);
      }
    } else {
      const expiresAt = localStorage.getItem('expiresAt');
      const date = new Date().getTime();

      setTimeout(() => {
        removeAccessToken();
      }, expiresAt - date);
    }
  }, [accessToken, pathname, removeAccessToken]);
  return (
    <>
      <Header accessToken={accessToken} />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/artists' component={ArtistsPage} />
        <Route exact path='/albums/:id' component={AlbumsPage} />
      </Switch>
      {next}
    </>
  );
};

export default withRouter(App);
