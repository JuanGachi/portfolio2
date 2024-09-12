import { authFetch } from "../lib";
import { ENV } from "../utils";

async function recharge(token, userId, amount) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WALLET.RECHAGE}/`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      userId,
      amount,
    }),
  };

  const response = await authFetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

async function sendMoney(userId, amount, message) {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WALLET.SEND_MONEY}/`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      amount,
      message,
    }),
  };

  const response = await authFetch(url, params);

  if (response.status !== 200) throw response;

  return await response.json();
}

export const walletCtrl = {
  recharge,
  sendMoney,
};
