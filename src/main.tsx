import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h2 className="text-center">Oi com Tailwind</h2>
  </StrictMode>
);
