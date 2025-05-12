import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DefaultLayout from "@/layout/DefaultLayout";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Usuarios = lazy(() => import("../pages/Usuarios"));
const Documentos = lazy(() => import("../pages/Documentos"));
const Geral = lazy(() => import("../pages/Geral"));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/configuracoes" element={<Geral />} />
        </Route>
      </Route>

      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}
