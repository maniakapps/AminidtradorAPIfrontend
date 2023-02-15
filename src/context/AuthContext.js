/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    // use localStorage.getItem directly rather than a ternary operator
    // for better readability
    JSON.parse(localStorage.getItem("authTokens")) || null
  );
  const [user, setUser] = useState(() =>
    authTokens ? jwt_decode(authTokens.access) : null
  );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {
      const response = await fetch(API_URL + "/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();

      if (response.ok) { // use the `ok` property of the response object for better readability
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("dashboard");
      } else {
        alert("Credenciales de inicio de sesión incorrectas!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async (username, password, password2) => {
    try {
      const response = await fetch(API_URL + "/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          password2
        })
      });
      if (response.ok) {
        navigate("/login");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children} {/* conditionally render `children` once the loading state is false */}
    </AuthContext.Provider>
  );
};
