import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes/app.routes";
import { BrowserRouter } from "react-router";
import "./index.css";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
