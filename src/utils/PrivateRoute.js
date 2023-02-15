import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Spinner from "./Spinner";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authTokens");
      if (token) {
        const decodedToken = jwt_decode(token);
        setUser(decodedToken);
      }
      setLoading(false);
    };
    fetchUser();
  }, [setUser]);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
