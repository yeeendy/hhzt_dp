import { instance } from "./axios";
import { SignUpUser } from "../util/interface";

export const signUp = async (user: SignUpUser) => {
  try {
    const result = await instance.post("/user/signup", {
      email: user.id,
      password: user.pw,
      nickname: user.nickname,
    });
    return result;
  } catch (error) {
    // alert(error.response.data.message);
  }
};

export const duplicateNicknameCheck = async (user: SignUpUser) => {
  try {
    const result = await instance.get(`/user/nickname/check?nickname=${user.nickname}`);
    return result;
  } catch (error) {
    // alert(error.response.data.message);
  }
};

export const duplicateIdCheck = async (user: SignUpUser) => {
  try {
    const result = await instance.get(`/user/email/check?email=${user.id}`);
    return result;
  } catch (error) {
    // alert(error.response.data.message);
  }
};
