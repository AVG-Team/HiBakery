import Logo from "../../../assets/img/logo/HiBakery-logo.png";

export default function Navbar() {
    return (
        <nav id="header" className="fixed top-0 z-30 w-full bg-transparent">
            <div className="h-[60px] mx-6 bg-white border rounded-b-full">
                <div className="container grid items-center grid-cols-3 mx-auto">
                    {/* Left Side (Nav Links) */}
                    <div className="flex justify-center space-x-6">
                        <a href="/" className="text-gray-600 hover:text-pink-500">
                            Home
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-gray-800">
                            About
                        </a>
                        <a href="/reviews" className="text-gray-600 hover:text-gray-800">
                            Reviews
                        </a>
                        <a href="/menu" className="text-gray-600 hover:text-gray-800">
                            Menu
                        </a>
                        <a href="/gallery" className="text-gray-600 hover:text-gray-800">
                            Gallery
                        </a>
                    </div>
                    {/* Center (Logo) */}
                    <div className="flex justify-center">
                        <img src={Logo} alt="Logo" className="h-16" />
                    </div>
                    {/* Right Side (Nav Links) */}
                    <div className="flex justify-center space-x-6">
                        <a href="/team" className="text-gray-600 hover:text-gray-800">
                            Team
                        </a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-800">
                            Contact
                        </a>
                        <a href="/support" className="text-gray-600 hover:text-gray-800">
                            Support
                        </a>
                        <a href="/logout" className="text-gray-600 hover:text-gray-800">
                            Logout
                        </a>
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
                    </div>
                </div>
            </div>
        </nav>
    );
}
