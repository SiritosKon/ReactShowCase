import { lazy } from "react";

export enum AppRoutes {
  MAIN = "main",
  LIST = "list",
}

export const getRouteMain = () => "/";
export const getRouteList = () => "/list";

export const routeConfig: Record<
  AppRoutes,
  {
    path: string;
    element: React.LazyExoticComponent<React.ComponentType>;
  }
> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: lazy(() =>
      import("@/pages/main/ui/MainPage").then((module) => ({
        default: module.MainPage,
      }))
    ),
  },
  [AppRoutes.LIST]: {
    path: getRouteList(),
    element: lazy(() =>
      import("@/pages/list/ui/ListPage").then((module) => ({
        default: module.ListPage,
      }))
    ),
  },
};
