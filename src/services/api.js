import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// api.interceptors.request.use(
//   (config) => {
//     console.log("Request interceptor triggered");
//     console.log("Config URL:", config.url);
//
//     const authentication = localStorage.getItem("authentication");
//     console.log("Authentication from localStorage:", authentication);
//     if (!authentication) {
//       return config;
//     }
//
//     const parsedAuthentication = JSON.parse(authentication);
//     const accessToken = parsedAuthentication.jwtToken;
//
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//
//     const refreshToken = parsedAuthentication.refreshToken;
//     if (refreshToken) {
//       config.headers["X-Refresh-Token"] = refreshToken;
//     }
//
//     console.log("Final headers:", config.headers);
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
//
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     console.log("Response interceptor triggered");
//     if (error.status === 401 && error.response.data.jwtError === "EXPIRED") {
//       console.log("Started refreshing");
//       const authentication = localStorage.getItem("authentication");
//       console.log("Authentication from localStorage:", authentication);
//       if (!authentication) {
//         console.log("No authentication found");
//         return Promise.reject(error);
//       }
//
//       const refreshToken = JSON.parse(authentication).refreshToken;
//       console.log("Refresh token:", refreshToken);
//
//       if (!refreshToken) {
//         console.log("No refresh token");
//         localStorage.removeItem("authentication");
//         //window.location.href = "/login";
//         return Promise.reject(error);
//       }
//
//       try {
//         console.log("Calling refresh function...");
//         const tokens = await refresh();
//         console.log("Refresh response received:", tokens);
//         console.log("Refresh response data:", tokens.data);
//
//         const { jwtToken: newAccessToken, refreshToken: newRefreshToken } =
//           tokens;
//         console.log(
//           "New access token:",
//           newAccessToken ? "present" : "missing",
//         );
//         console.log(
//           "New refresh token:",
//           newRefreshToken ? "present" : "missing",
//         );
//         const updatedAuth = {
//           ...JSON.parse(authentication || "{}"),
//           jwtToken: newAccessToken,
//           refreshToken: newRefreshToken,
//         };
//         localStorage.setItem("authentication", JSON.stringify(updatedAuth));
//
//         const originalRequestConfig = error.config;
//         originalRequestConfig.headers.Authorization = `Bearer ${newAccessToken}`;
//         originalRequestConfig.headers["X-Refresh-Token"] = refreshToken;
//
//         console.log("Updated tokens after refresh. New config: ");
//         console.log(originalRequestConfig);
//         return api(originalRequestConfig);
//       } catch (refreshError) {
//         localStorage.removeItem("authentication");
//         //window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }
//
//     //window.location.href = "/login";
//     return Promise.reject(error);
//   },
// );

export default api;
