import { lazy } from "react";
import Loadable from "../layout/loadable";

/* ***Layout**** */
const Layout = Loadable(lazy(() => import("../layout")));

/* ***Pages**** */
const Home = Loadable(lazy(() => import("../pages/home")));

const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
];

export default Router;
