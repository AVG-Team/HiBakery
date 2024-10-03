import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/img/logo/HiBakery.png"; 
import Cake from "../../../assets/img/Cake.png"; 
export const SignUp = () => {
  
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [visibleRe, setVisibleRe] = useState(false);    


  return ( 
    <div className="container min-h-screen w-full flex items-center justify-center  p-4">
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6 w-24 h-24 mx-auto md:mx-0">
            <img src={Logo} className="w-full h-full object-contain" alt="Logo" />
          </div>
          <div className="header-text mb-6 text-center md:text-left">
            <h5 className="text-2xl font-semibold">Hello, Nice to meet you</h5>
            <p className="text-gray-600">We are happy to have your interest.</p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer" placeholder=" " />
              <label htmlFor="floating_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
            </div>
            <div className="relative">
              <input type={visible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} id="floating_password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer" placeholder=" " />
              <label htmlFor="floating_password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setVisible(!visible)}>
                {!visible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    )}
              </div>
            </div>
            <div className="relative">
              <input type={visibleRe ? "text" : "password"} value={repassword} onChange={(e) => setRepassword(e.target.value)} id="floating_repassword" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-Coral-Pink-500 peer" placeholder=" " />
              <label htmlFor="floating_repassword" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-Coral-Pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setVisibleRe(!visibleRe)}>
                  {visible ? (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} className="text-gray-400" />
                                    )}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 mb-6">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-Coral-Pink-500 border-gray-300 rounded focus:ring-Coral-Pink-500" id="formCheck" />
            <label htmlFor="formCheck" className="ml-2 text-gray-700 text-sm">I agree with all policy</label>
          </div>
          <button className="group relative min-h-[40px] rounded-xl w-full overflow-hidden border border-Coral-Pink-500 bg-white text-Coral-Pink-500 shadow transition-all before:absolute 
                          before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-Coral-Pink-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 
                        after:bg-Coral-Pink-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
            <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4
                            before:bg-Coral-Pink-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-Coral-Pink-500 
                                after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
            <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Login</span>
        </button>
        <button className="w-full mt-4 py-2 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:scale-110 hover:border-Coral-Pink-500 transition duration-300 flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
           Login with Google
        </button>
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">Already have an account? </span>
            <a href="#" className="text-Coral-Pink-500 text-sm font-medium hover:underline">Login</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <img src={Cake} className="w-full max-w-md object-cover" alt="Decorative cake" />
        </div>
      </div>
    </div>
  </div>

  );
};

export default SignUp;
