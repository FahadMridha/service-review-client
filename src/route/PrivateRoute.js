import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authProvider'/AuthPovider";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  if (loding) {
    return (
      <>
        <h2 className="text-xl text-red-500">Loading...........</h2>
        <div
          className="radial-progress text-end"
          style={{ "--value": 70 }}
        ></div>
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
