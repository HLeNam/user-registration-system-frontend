import guestRoutes from "@/routes/guest.routes";
import { lazy } from "react";
import type { AppRouteObject } from "@/types/route.type";
import { createBrowserRouter } from "react-router";
import ErrorPage from "@/pages/ErrorPage";
import publicRoutes from "@/routes/public.routes";

const NotFound = lazy(() => import("@/pages/NotFound"));

const routes: AppRouteObject[] = [
    ...publicRoutes,
    ...guestRoutes,
    {
        path: "*",
        Component: NotFound,
        errorElement: <ErrorPage />,
    },
];

const router = createBrowserRouter(routes);

export default router;
