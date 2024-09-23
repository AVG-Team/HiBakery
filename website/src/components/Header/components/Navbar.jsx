import { useEffect, useState } from "react";
import Logo from "../../../assets/img/logo/HiBooking-landscape.png";

export default function Navbar() {
    const [scrollpos, setScrollpos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollpos(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        setIsScrolled(scrollpos > 10);
    }, [scrollpos]);

    return (
        <nav id="header" className={`fixed w-full z-30 top-0 ${isScrolled ? "bg-white shadow-md opacity-80" : ""}`}>
            <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                <div className="flex items-center pl-4">
                    <a className="text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl" href="/">
                        <img src={Logo} alt="logo" className="h-[25%] w-[25%]" />
                    </a>
                </div>
                <div className="block pr-4 lg:hidden">
                    <button
                        id="nav-toggle"
                        className="flex items-center p-1 text-pink-800 transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                        isScrolled ? "bg-white" : "bg-transparent"
                    } text-black p-4 lg:p-0 z-20`}
                    id="nav-content"
                >
                    <ul className="items-center justify-end flex-1 list-reset lg:flex">
                        <li className="mr-3">
                            <a className="inline-block px-4 py-2 font-bold text-black no-underline" href="/">
                                Đặt Phòng
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                                href="/"
                            >
                                Giỏ Hàng
                            </a>
                        </li>
                        <li className="mr-3">
                            <a
                                className="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                                href="/dang-nhap"
                            >
                                Đăng nhập
                            </a>
                        </li>
                    </ul>
                    <button
                        id="navAction"
                        className={`mx-auto lg:mx-0  ${
                            isScrolled
                                ? "bg-primary text-gray-800 hover:text-white "
                                : "bg-white text-gray-800 opacity-80 hover:text-primary"
                        } font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
            <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
        </nav>
    );
}
