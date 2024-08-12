import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./contexts/Auth.contexts";
import { useContext } from "react";

const PrivateRoute = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
