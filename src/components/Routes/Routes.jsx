import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Statistic from "../Statistics/Statistic";
import DonationRoute from "../DonationRoute/DonationRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import DonationDets from "../DonationDets/DonationDets";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,

        loader: () => fetch("/data.json"),
      },
      {
        path: "donations",
        element: <DonationRoute />,
      },
      {
        path: "statistics",
        element: <Statistic />,
      },
      {
        path: "/donations/:id",
        element: <DonationDets />,
      },
    ],
  },
]);
export default router;
