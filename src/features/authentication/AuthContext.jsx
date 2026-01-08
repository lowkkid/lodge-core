import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import api from "../../services/api.js";
import { refresh } from "../../services/apiAuth.js";
import { parseJwt } from "../../utils/helpers.js";

const AuthContext = createContext(undefined);

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within the AuthProvider");
  }

  return authContext;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /* this useEffect runs only once when the app is loaded for the FIRST time or
   * when the app page was reloaded. main goal is to fetch new JWT token into memory,
   * because it is not stored persistently. in case of error, user will be
   * redirected to /login page
   */
  useEffect(() => {
    const initialRefresh = async () => {
      try {
        setIsLoading(true);
        const data = await refresh();
        const { username, role, sub: userId, avatar } = parseJwt(data.jwtToken);
        setToken(data.jwtToken);
        setUser({ username, role, userId, avatar });
      } catch {
        setUser(null);
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    initialRefresh();
  }, []);

  useLayoutEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization =
        !config._retry && token
          ? `Bearer ${token}`
          : config.headers.Authorization;
      return config;
    });

    return () => api.interceptors.request.eject(requestInterceptor);
  }, [token]);

  //when in request there was no token (user reloaded page) or token is expired - try to get new one with refresh token
  useLayoutEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.response.data.jwtError) {
          try {
            setIsLoading(true);
            const response = await refresh();

            setToken(response.jwtToken);

            originalRequest.headers.Authorization = `Bearer ${response.jwtToken}`;
            originalRequest._retry = true;

            return api(originalRequest);
          } catch (err) {
            console.error(err);
            setToken(null);
            setUser(null);
          } finally {
            setIsLoading(false);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => api.interceptors.response.eject(responseInterceptor);
  }, []);

  const saveUser = (token) => {
    setToken(token);
    const { username, role, sub: userId, avatar } = parseJwt(token);
    setUser({ username, role, userId, avatar });
  };

  const logout = async () => {
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    saveUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
