import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // Not logged in → redirect to login
    return <Navigate to="/" replace />;
  }

  // Logged in → render page
  return children;
};

export default ProtectedRoute;
