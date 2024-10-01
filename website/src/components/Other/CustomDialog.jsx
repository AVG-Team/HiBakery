import { useEffect, useRef } from 'react'
import Logo from "../../assets/img/logo/HiBooking-logo.png";

// eslint-disable-next-line react/prop-types
export default function CustomDialog({ isOpen, onClose, productName, productPrice }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            dialogRef.current?.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        ref={dialogRef}
                        tabIndex="-1"
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                    >
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                <div>
                                    <img src={Logo} alt="HiBooking" className="w-4/12 mx-auto"/>
                                </div>
                                <div className="mt-2">
                                    <p className="text-2xl font-semibold text-black">
                                        Are you sure you want to add {productName} to your cart ?
                                    </p>
                                    <p className="text-2xl font-semibold text-black">
                                        The price is {productPrice} VNĐ.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex justify-center">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border-transparent shadow-sm px-4 py-2
                                bg-Coral-Pink-300 text-base font-medium text-white hover:bg-Deep-Tea-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Coral-Pink-300
                                sm:ml-3 sm:w-auto sm:text-sm border-0"
                                onClick={onClose}
                            >
                                Add to Cart
                            </button>
                            <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Deep-Tea-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm hover:border-Deep-Tea-300"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}