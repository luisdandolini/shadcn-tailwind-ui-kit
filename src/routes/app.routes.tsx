import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import DefaultLayout from "../layouts/DefaultLayout";

const Login = lazy(() => import("../pages/Login"));
// const Dashboard = lazy(() => import("../pages/Dashboard"));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoute />}>
        {/* <Route element={<DefaultLayout />}> */}
        {/* <Route index element={<Dashboard />} />
          <Route path="/adicionar-site" element={<AddSite />} /> */}
        {/* </Route> */}
      </Route>

      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}
