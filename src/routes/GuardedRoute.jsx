import { Navigate, Outlet } from "react-router-dom";
import { DashboardArea } from "../pages/DashboardArea";


export function GuardedRoute({
    isRouteAccessible,
    isAuthenticated,
    redirectRoute,
}) {
    if (isRouteAccessible) {
        if (isAuthenticated) {
            return <DashboardArea></DashboardArea>
        }
        else {
            return <Outlet></Outlet>
        }
    } else {
        return <Navigate to={redirectRoute} replace />
    }
}
