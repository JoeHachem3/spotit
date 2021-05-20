import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  accessToken: localStorage.getItem('accessToken') ? true : false,
  artists: null,
  lastSearch: '',
  currentArtist: null,
  albums: null,
  nextArtistsUrl: null,
  nextAlbumsUrl: null,
};

const setAccessToken = (state, action) => {
  localStorage.setItem('accessToken', btoa(action.accessToken));
  localStorage.setItem('expiresAt', action.expiresAt);
  return updateObject(state, {
    accessToken: true,
  });
};

const removeAccessToken = (state, action) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('expiresAt');
  return updateObject(state, {
    accessToken: false,
    artists: null,
    lastSearch: '',
    currentArtist: null,
    albums: null,
    nextArtistsUrl: null,
    nextAlbumsUrl: null,
  });
};

const setArtists = (state, action) => {
  return updateObject(state, {
    artists: action.artists,
  });
};

const removeArtists = (state, action) => {
  return updateObject(state, {
    artists: null,
  });
};

const setLastSearch = (state, action) => {
  return updateObject(state, {
    lastSearch: action.lastSearch,
  });
};

const setCurrentArtist = (state, action) => {
  return updateObject(state, {
    currentArtist: action.currentArtist,
  });
};

const removeCurrentArtist = (state, action) => {
  return updateObject(state, {
    currentArtist: null,
  });
};

const setAlbums = (state, action) => {
  return updateObject(state, {
    albums: action.albums,
  });
};

const removeAlbums = (state, action) => {
  return updateObject(state, {
    albums: null,
  });
};

const setNextArtistsUrl = (state, action) => {
  return updateObject(state, {
    nextArtistsUrl: action.nextArtistsUrl,
  });
};

const setNextAlbumsUrl = (state, action) => {
  return updateObject(state, {
    nextAlbumsUrl: action.nextAlbumsUrl,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN:
      return setAccessToken(state, action);
    case actionTypes.REMOVE_ACCESS_TOKEN:
      return removeAccessToken(state, action);
    case actionTypes.SET_ARTISTS:
      return setArtists(state, action);
    case actionTypes.REMOVE_ARTISTS:
      return removeArtists(state, action);
    case actionTypes.SET_LAST_SEARCH:
      return setLastSearch(state, action);
    case actionTypes.SET_CURRENT_ARTIST:
      return setCurrentArtist(state, action);
    case actionTypes.REMOVE_CURRENT_ARTIST:
      return removeCurrentArtist(state, action);
    case actionTypes.SET_ALBUMS:
      return setAlbums(state, action);
    case actionTypes.REMOVE_ALBUMS:
      return removeAlbums(state, action);
    case actionTypes.SET_NEXT_ARTISTS_URL:
      return setNextArtistsUrl(state, action);
    case actionTypes.SET_NEXT_ALBUMS_URL:
      return setNextAlbumsUrl(state, action);
    default:
      return state;
  }
};

export default reducer;
