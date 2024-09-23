import Cookies from "js-cookie";
import { StorageKeys } from "../services/key/keys";
import { Navigate, Outlet } from "react-router-dom";

export default function BlankLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Outlet />
        </div>
    );
}
