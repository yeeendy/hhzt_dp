import { instance } from './axios';
import { LoginUser } from '../util/interface';
import { log } from 'console';

export const login = async (user: LoginUser) => {
  try {
    const result = await instance
      .post('/user/login', { email: user.id, password: user.pw })
      .then((result) => result);
      console.log(result.headers);
      console.log(result.headers.Authorization);
    return result;
  } catch (error) {
    // console.log(error.result);
    throw error;
  }
};
