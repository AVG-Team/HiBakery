import Logo from "../../../assets/img/logo/HiBakery-logo.png";

export default function Navbar() {
    return (
        <nav id="header" className="fixed top-0 z-30 w-full bg-transparent ">
            <div className="h-[60px] mx-6 bg-white border rounded-b-full shadow-lg">
                <div className="container grid items-center grid-cols-3 mx-auto">
                    {/* Left Side (Nav Links) */}
                    <div className="justify-center hidden space-x-6 md:flex">
                        <a href="/" className="text-gray-600 hover:text-pink-500">
                            Trang chủ
                        </a>
                        <a href="/san-pham" className="text-gray-600 hover:text-gray-800">
                            Sản Phấm
                        </a>
                        <a href="/san-pham" className="text-gray-600 hover:text-gray-800">
                            Danh mục
                        </a>
                    </div>
                    {/* Center (Logo) */}
                    <div className="flex justify-center">
                        <img src={Logo} alt="Logo" className="h-16" />
                    </div>
                    {/* Right Side (Nav Links + Hamburger for Mobile) */}
                    <div className="flex justify-center space-x-6">
                        {/* Hidden on small screens, shown on medium+ */}
                        <div className="hidden space-x-6 md:flex">
                            <a href="/gio-hang" className="text-gray-600 hover:text-gray-800">
                                Giỏ hàng
                            </a>
                            <a href="/ve-chung-toi" className="text-gray-600 hover:text-gray-800">
                                Về chúng tôi
                            </a>
                            <a href="/chinh-sach-van-chuyen" className="text-gray-600 hover:text-gray-800">
                                Hộ trợ
                            </a>
                            {/* <a href="/logout" className="text-gray-600 hover:text-gray-800">
                            Đăng xuất
                        </a> */}
                        </div>
                        {/* Cart Icon (always visible) */}
                        <a href="/cart" className="text-gray-600 hover:text-gray-800">
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h18M3 8h18M3 13h18M3 18h18"
                                ></path>
                            </svg>
                        </a>
                        {/* Hamburger Icon (for small screens) */}
                        <div className="flex items-center md:hidden">
                            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
