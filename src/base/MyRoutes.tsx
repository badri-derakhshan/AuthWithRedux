import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default MyRoutes;
