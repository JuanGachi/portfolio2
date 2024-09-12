import { authFetch } from "../lib";
import { ENV } from "../utils";

async function getMe() {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}/`;
  const response = await authFetch(url);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function updateFullName(firstName, lastName) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}/`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name: firstName, last_name: lastName }),
  };

  const response = await authFetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function updateEmail(email) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}/`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  };

  const response = await authFetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function updatePassword(password) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}/`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  };

  const response = await authFetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

export const userCtrl = {
  getMe,
  updateFullName,
  updateEmail,
  updatePassword,
};
