import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/structures/Layout";
import { URLS } from "./constants/urls";
import { DashboardPage } from "./pages/Dashboard";
import GeneralError from "./pages/errors/GeneralError";
import NotFoundError from "./pages/errors/NotFoundError";

const router = createBrowserRouter([
  {
    path: URLS.dashboard,
    errorElement: <GeneralError />,
    element: <Layout />,
    children: [
      {
        path: URLS.dashboard,
        element: <DashboardPage />,
        index: true,
      },
    ],
  },
  { path: "*", Component: NotFoundError },
]);

export default router;