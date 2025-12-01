import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import * as apiService from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();   // ⭐ routing inside context

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('authToken');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      apiService.setAuthToken(storedToken);
    }
    setLoading(false);
  }, []);

  // LOGIN
  const login = async (username, password) => {
    try {
      const response = await apiService.login(username, password);

      if (response.access_token) {
        const userObj = {
          username,
          role: response.role || "user",    // ⭐ store role if backend returns it
        };

        localStorage.setItem('authToken', response.access_token);
        localStorage.setItem('user', JSON.stringify(userObj));

        setUser(userObj);
        apiService.setAuthToken(response.access_token);

        // ⭐ Redirect after login
        navigate("/dashboard");

        return { success: true };
      } else {
        throw new Error("No token received");
      }
    } catch (err) {
      console.error("Login failed:", err);
      return { success: false, error: err.message };
    }
  };

  // SIGNUP
  const signup = async (username, email, password) => {
    try {
      const response = await apiService.signup(username, email, password);

      if (response.access_token) {
        const userObj = {
          username,
          email,
          role: response.role || "user",
        };

        localStorage.setItem('authToken', response.access_token);
        localStorage.setItem('user', JSON.stringify(userObj));

        setUser(userObj);
        apiService.setAuthToken(response.access_token);

        // ⭐ Redirect after signup
        navigate("/dashboard");

        return { success: true };
      } else {
        throw new Error("No token received");
      }
    } catch (err) {
      console.error("Signup failed:", err);
      return { success: false, error: err.message };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    apiService.clearAuth();

    navigate("/login");  // ⭐ redirect to login
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loading,
        token: localStorage.getItem('authToken'),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
