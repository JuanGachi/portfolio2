import { authFetch } from "../lib";
import { ENV } from "../utils";

async function getAll(limit = 1000) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HISTORY}/?limit=${limit}`;
  const response = await authFetch(url);

  if (response.status !== 200) throw response;

  return await response.json();
}

export const historyCtrl = {
  getAll,
};
