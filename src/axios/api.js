import axios from 'axios';
import Cookies from 'universal-cookie';

export const AuthHeader = () => {
  const cookie = new Cookies();
  const jwtToken = cookie.get('jwtToken');
  const headers = {
    headers: { Authorization: jwtToken, 'Content-Type': 'application/json' },
  };
  return headers;
};

export const userApi = axios.create({
  baseURL: `${import.meta.env.REACT_APP_SERVER_URL}/user`,
});

export const itemApi = axios.create({
  baseURL: `${import.meta.env.REACT_APP_SERVER_URL}/item`,
});
