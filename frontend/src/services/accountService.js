import { request, axiosAuth } from "./axios";
import { store } from "..";
import { LOGIN, LOGOUT, TOKEN_DELETE } from "@/reducer/type";

/* 요청 URL*/
const ACCOUNT_URL = "/api/account";
const AUTH_URL = "/api/auth";

// 회원가입
export const registRequest = async (dataToSubmit) => {
  try {
    const payload = await request.post(ACCOUNT_URL, dataToSubmit);
    return payload;
  } catch (err) {
    return err;
  }
};

// 이메일 인증번호 전송
export const sendAuthNumberEmail = (dataToSubmit) => {
  try {
    request.post(`${ACCOUNT_URL}/verify-email`, dataToSubmit);
  } catch (err) {
    return err;
  }
};

// 이메일 인증번호 확인
export const verifyAuthNumber = async (dataToSubmit) => {
  try {
    const payload = await request.get(`${ACCOUNT_URL}/verify-email/${dataToSubmit.code}?email=${dataToSubmit.email}`);
    return payload;
  } catch (err) {
    return err;
  }
};

// 이메일이 중복체크
export const checkEmailRequest = async (dataToSubmit) => {
  try {
    const payload = await request.get(`${ACCOUNT_URL}/email/${dataToSubmit}`);
    return payload;
  } catch (err) {
    return err;
  }
};

// 닉네임 중복체크
export const checkNickNameRequest = async (dataToSubmit) => {
  try { 
    const payload = await request.get(`${ACCOUNT_URL}/name/${dataToSubmit}`);
    return payload;
  }catch (err){
    return err;
  }
};

export const loginRequest = async (dataToSubmit) => {
  try {
    const payload = await request.post(`${AUTH_URL}`, dataToSubmit);
    return {
      type: LOGIN,
      payload
    };
  }catch (err){
    return err;
  }
};

export const logoutRequest = async () => {
  try{
    await axiosAuth.delete(`${AUTH_URL}`);
  } catch (err){

  } finally {
    store.dispatch({ type: TOKEN_DELETE });
  }
};

// 토큰 재발급
export const getToken = async () => {
  try {
    const payload = await request.get(`${AUTH_URL}/refresh`);
    return payload;
  } catch (err) {
    return err;
  }
};