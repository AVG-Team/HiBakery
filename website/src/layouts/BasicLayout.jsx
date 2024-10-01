import Cookies from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StorageKeys } from "../services/key/keys";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function BasicLayout() {
    // Check if the user is logged in and on the login or signup page
    if (
        Cookies.get(StorageKeys.ACCESS_TOKEN) &&
        (location.pathname === "/dang-nhap" || location.pathname === "/dang-ky")
    ) {
        return <Navigate to="/" replace />;
    }

    // Conditional rendering of Header or Navbar
    const isHomePage = location.pathname === "/trang-chu" || location.pathname === "/";

    return (
        <div className="flex flex-col w-full min-h-screen">
            {isHomePage ? <Header /> : <Navbar />}
            <Outlet />
            <Footer />
        </div>
    );
}
