import PATH from "@/constants/path";
import { createElement, lazy } from "react";
import MainLayout from "@/layouts/MainLayout";
import type { AppRouteObject } from "@/types/route.type";

const HomePage = lazy(() => import("@/pages/Home"));

const publicRoutes: AppRouteObject[] = [
    {
        path: "/",
        Component: MainLayout,
        errorElement: createElement(lazy(() => import("@/pages/ErrorPage"))),
        children: [
            {
                path: PATH.home,
                index: true,
                Component: HomePage,
            },
        ],
    },
];

export default publicRoutes;
