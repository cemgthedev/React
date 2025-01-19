import React from "react";
import { createRoot } from "react-dom/client";

import "@/styles/globals.css";
import { RouterProvider } from "react-router-dom";
import Provider from "./providers/index.jsx";
import router from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
