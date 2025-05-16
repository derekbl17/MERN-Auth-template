import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ allowed }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    console.log("no user info");
    return <Navigate to="/login" replace />;
  }

  if (!allowed.includes(userInfo.role)) {
    console.log("no authorization");
    return <Navigate to="/no-auth" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
