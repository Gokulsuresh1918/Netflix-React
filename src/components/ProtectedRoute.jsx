import React, { Children } from "react";
import { UserAuth } from "../context/AuthContesxt";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    return Children;
  }
};

export default ProtectedRoute;
