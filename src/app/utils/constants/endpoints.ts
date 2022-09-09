import { environment } from 'src/environments/environment';

const apiHost = environment.apiHost;

export const ENDPOINT = {
  LOGIN: `${apiHost}/auth/login`,
  REGISTER: `${apiHost}/user/create`,
  CATEGORIES: `${apiHost}/categories`,
  SONGS: `${apiHost}/songs`,
  SONGS_BY_FILTER: `${apiHost}/songs/songs-by-filter`,
};
