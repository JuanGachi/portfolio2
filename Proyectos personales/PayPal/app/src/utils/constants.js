const SERVER_IP = "192.168.18.68:8000";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `http://${SERVER_IP}`,
  API_URL: `http://${SERVER_IP}/api`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
    },
    ME: "user/me",
    WALLET: {
      RECHARGE: "wallet/recharge",
      SEND_MONEY: "wallet/send_money",
    },
    HISTORY: "history",
    USERS: "users/get_all",
  },
  JWT: {
    ACCESS: "access",
  },
  STRIPE_TOKEN:
    "sk_test_51Px2UHK2hpPpB9lMzItiPFH66gtEQVmzuZwjUPfQTYXGR5XJSUFMFm6hLuVpxs7sY24Ppx2FZp74wWV2FjyFs9Iw00GbwHDgCL",
};
