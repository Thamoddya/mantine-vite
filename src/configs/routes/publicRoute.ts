import { lazy } from "react";
import { routes } from "../../constants/route";
import { Route } from "../../types/route";

const projectRoute: Route[] = [
  {
    key: "/",
    path: routes.home,
    component: lazy(() => import("../../pages/public/Home")),
  },
];

export default projectRoute;
