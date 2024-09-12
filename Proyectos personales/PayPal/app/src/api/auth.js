import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../utils";

async function register(email, password) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}/`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function login(email, password) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}/`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function setToken(token) {
  await AsyncStorage.setItem(ENV.JWT.ACCESS, token);
}

async function getToken() {
  return await AsyncStorage.getItem(ENV.JWT.ACCESS);
}

async function removeToken() {
  await AsyncStorage.removeItem(ENV.JWT.ACCESS);
}

export const authCtrl = {
  register,
  login,
  setToken,
  getToken,
  removeToken,
};
