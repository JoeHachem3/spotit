import * as actionTypes from './actionTypes';

export const setAccessToken = (accessToken, expiresAt) => {
  return {
    type: actionTypes.SET_ACCESS_TOKEN,
    accessToken,
    expiresAt,
  };
};

export const removeAccessToken = () => {
  return {
    type: actionTypes.REMOVE_ACCESS_TOKEN,
  };
};

export const setTimeOutId = (timeOutId) => {
  return {
    type: actionTypes.SET_TIMEOUT_ID,
    timeOutId,
  };
};

export const setArtists = (artists) => {
  return {
    type: actionTypes.SET_ARTISTS,
    artists,
  };
};

export const removeArtists = () => {
  return {
    type: actionTypes.REMOVE_ARTISTS,
  };
};

export const setLastSearch = (lastSearch) => {
  return {
    type: actionTypes.SET_LAST_SEARCH,
    lastSearch,
  };
};

export const setCurrentArtist = (currentArtist) => {
  return {
    type: actionTypes.SET_CURRENT_ARTIST,
    currentArtist,
  };
};

export const removeCurrentArtist = () => {
  return {
    type: actionTypes.REMOVE_CURRENT_ARTIST,
    currentArtist: null,
  };
};

export const setAlbums = (albums) => {
  return {
    type: actionTypes.SET_ALBUMS,
    albums,
  };
};

export const removeAlbums = () => {
  return {
    type: actionTypes.REMOVE_ALBUMS,
    albums: null,
  };
};

export const setNextArtistsUrl = (nextArtistsUrl) => {
  return {
    type: actionTypes.SET_NEXT_ARTISTS_URL,
    nextArtistsUrl,
  };
};

export const setNextAlbumsUrl = (nextAlbumsUrl) => {
  return {
    type: actionTypes.SET_NEXT_ALBUMS_URL,
    nextAlbumsUrl,
  };
};
