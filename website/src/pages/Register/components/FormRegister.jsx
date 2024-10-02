import { useState } from "react";
// import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/logo/HiBakery.png";
import Cake from "../../../assets/img/Cake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export const SignUp = () => {
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [visibleRe, setVisibleRe] = useState(false);

    return (
        <div className="flex items-center justify-center w-full min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="flex flex-col w-full md:flex-row">
                    <div className="w-full p-8 md:w-1/2">
                        <div className="w-24 h-24 mx-auto mb-6 md:mx-0">
                            <img src={Logo} className="object-contain w-full h-full" alt="Logo" />
                        </div>
                        <div className="mb-6 text-center header-text md:text-left">
                            <h5 className="text-2xl font-semibold">Hello, Nice to meet you</h5>
                            <p className="text-gray-600">We are happy to have your interest.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="floating_email"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="floating_password"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Password
                                </label>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() => setVisible(!visible)}
                                >
                                    {visible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    )}
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type={visibleRe ? "text" : "password"}
                                    value={repassword}
                                    onChange={(e) => setRepassword(e.target.value)}
                                    id="floating_repassword"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="floating_repassword"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Confirm Password
                                </label>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() => setVisibleRe(!visibleRe)}
                                >
                                    {visibleRe ? (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 mb-6">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded form-checkbox text-Coral-Pink-500 focus:ring-Coral-Pink-500"
                                id="formCheck"
                            />
                            <label htmlFor="formCheck" className="ml-2 text-sm text-gray-700">
                                I agree with all policy
                            </label>
                        </div>
                        <button className="w-full px-4 py-2 text-white transition duration-300 rounded-lg bg-Coral-Pink-500 hover:bg-Coral-Pink-600">
                            Register
                        </button>
                        <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-gray-700 transition duration-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Register with Google
                        </button>
                        <div className="mt-6 text-center">
                            <span className="text-sm text-gray-600">Already have an account? </span>
                            <a href="#" className="text-sm font-medium text-Coral-Pink-500 hover:underline">
                                Login
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full p-8 md:w-1/2">
                        <img src={Cake} className="object-cover w-full max-w-md" alt="Decorative cake" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
