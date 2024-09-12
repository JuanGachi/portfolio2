import { authCtrl } from "../api/auth";
import { fn } from "../utils";

export async function authFetch(url, params) {
  const token = await authCtrl.getToken();

  const logout = async () => {
    await authCtrl.removeToken();
  };

  if (!token) {
    logout();
  } else {
    if (fn.hasExpiredToken(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        throw error;
      }
    }
  }
}
