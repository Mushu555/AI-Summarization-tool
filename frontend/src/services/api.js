import axios from "axios";

const API = axios.create({
  baseURL:  "http://127.0.0.1:8000",   // ⭐ change this to your backend URL
});

// Set token on every request
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Clear the token
export const clearAuth = () => {
  delete API.defaults.headers.common["Authorization"];
};

// LOGIN
export const login = async (username, password) => {
  const res = await API.post("/api/auth/login", { username, password });
  return res.data;
};

export const signup = async (username, email, password) => {
  const res = await API.post("/api/auth/signup", { username, email, password });
  return res.data;
};


export default API;
