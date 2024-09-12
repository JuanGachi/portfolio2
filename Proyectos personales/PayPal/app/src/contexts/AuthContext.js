import { useState, useEffect, createContext } from "react";
import { authCtrl, userCtrl } from "../api";
import { fn } from "../utils";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reLogin();
  }, []);

  const reLogin = async () => {
    const token = await authCtrl.getToken();

    if (!token) {
      logout();
      setLoading(false);
      return;
    }

    if (fn.hasExpiredToken(token)) {
      logout();
    } else {
      await login(token);
    }

    setLoading(false);
  };

  const login = async (token) => {
    try {
      setLoading(true);
      const response = await userCtrl.getMe();
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    authCtrl.removeToken();
  };

  const reloadUser = async () => {
    const response = await userCtrl.getMe();
    setUser(response);
  };

  const data = {
    user,
    token,
    login,
    logout,
    reloadUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
