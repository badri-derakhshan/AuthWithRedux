import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../stores/index";
const ProtectedRoute: React.FC = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLogin);

  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
