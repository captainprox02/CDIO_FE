import { lazy } from "react";
import { config } from "~/config";

// Layouts
// import { DefaultLayout } from "~/layouts";

// Pages
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const ProductDetail = lazy(() => import("~/pages/Product"));

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: ProductDetail },
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [
//   { path: config.routes.wtf, component: wtf, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };
