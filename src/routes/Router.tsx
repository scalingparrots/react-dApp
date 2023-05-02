import { lazy } from "react";
import Loadable from "../layout/loadable";

/* ***Layout**** */
const Layout = Loadable(lazy(() => import("../layout")));

/* ***Pages**** */
const Home = Loadable(lazy(() => import("../pages/home")));

/* ***Error Pages**** */
const Error404 = Loadable(lazy(() => import("../pages/404")));

const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  //404 Page
  {
    path: "*",
    element: <Layout />,
    children: [{ path: "*", element: <Error404 /> }],
  },
];

export default Router;
