import { authFetch } from "../lib";
import { ENV } from "../utils";

async function getAll(search = "") {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/?search=${search}`;

  const response = await authFetch(url);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function getUser(userId) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}/`;

  const response = await authFetch(url);

  if (response.status !== 200) throw response;

  return await response.json();
}

export const usersCtrl = {
  getAll,
  getUser,
};
