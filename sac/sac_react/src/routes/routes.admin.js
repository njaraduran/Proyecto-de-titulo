import { escapeRegExp } from "lodash";
import {AdminLayout} from "../layouts";
import { HomeAdmin,UsersAdmin,ExpedientesAdmin}from "../pages/Admin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true
    },
    {
        path: "/admin/expedientes",
        layout: AdminLayout,
        component: ExpedientesAdmin,
        exact: true
    }


]

export default routesAdmin;