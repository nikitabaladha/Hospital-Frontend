// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setIsAuthenticated(true);
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const login = (details) => {
    localStorage.setItem("userDetails", JSON.stringify(details));
    setIsAuthenticated(true);
    setUserDetails(details);
  };

  const logout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userDetails, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
