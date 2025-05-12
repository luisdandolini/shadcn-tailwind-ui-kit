import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
