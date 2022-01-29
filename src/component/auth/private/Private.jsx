import { Outlet, Navigate } from "react-router-dom";
import { HasToken } from "../token/HasToken";

function Private() {
    const hasToken = HasToken();
    return hasToken ? <Outlet /> : <Navigate to="/login" />
}

export default Private;