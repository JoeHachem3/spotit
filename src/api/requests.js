import axios from 'axios';

const domain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://joehachem3.github.io/spotit';

export const authUrl = `https://accounts.spotify.com/authorize?client_id=6499b09693a64a09ae4d961182500473&redirect_uri=${domain}/%23/&response_type=token&state=123`;

export const getSearch = (value, types = [], lim, off = 0) => {
  const q = value ? `q=${value}` : '';
  const type = types.length ? `type=${types.join(',')}` : '';
  const limit = lim ? `limit=${lim}` : '';
  const offset = off ? `offset=${off}` : '';
  return axios.get(
    `https://api.spotify.com/v1/search?${q}&${type}&${limit}&${offset}`,
    {
      headers: {
        Authorization: 'Bearer ' + atob(localStorage.getItem('accessToken')),
      },
    },
  );
};

export const getArtistAlbums = (id, groups = [], lim, off = 0) => {
  const include_groups = groups.length
    ? `include_groups=${groups.join(',')}`
    : '';
  const limit = lim ? `limit=${lim}` : '';
  const offset = off ? `offset=${off}` : '';
  return axios.get(
    `https://api.spotify.com/v1/artists/${id}/albums?${include_groups}&${limit}&${offset}`,
    {
      headers: {
        Authorization: 'Bearer ' + atob(localStorage.getItem('accessToken')),
      },
    },
  );
};

export const getArtistById = (id) => {
  return axios.get(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: 'Bearer ' + atob(localStorage.getItem('accessToken')),
    },
  });
};

export const getNext = (next) => {
  return axios.get(next, {
    headers: {
      Authorization: 'Bearer ' + atob(localStorage.getItem('accessToken')),
    },
  });
};
