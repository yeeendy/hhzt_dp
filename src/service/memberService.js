import { userApi } from '../axios/api';

import { AuthHeader } from './axios/api';

const headers = AuthHeader();

// 로그인한 유저정보가 필요할 때
export const findLoginUser = async (userId) =>
  await userApi.get(`/${userId}`, headers);

export const registerMember = async (user) => await userApi.post('', user);

export const memberLogin = async (user) => await userApi.post('', user);

export const emailDuplicateCheck = async (email) =>
  await userApi.get(``, email);

export const sendEmailAuthCode = async (email) => await userApi.post('', email);

export const authCodeCheck = async (emailCode) =>
  await userApi.get('', emailCode);
