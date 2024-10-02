import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);

    return (
        <nav className="breadcrumb text-lg mb-4">
            <Link to="/" className="text-blue-500">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return (
                    <span key={to}>
                        {" > "}
                        <Link to={to} className="text-blue-500 capitalize">
                            {value.replace("-", " ")}
                        </Link>
                    </span>
                );
            })}
        </nav>
    );
}
