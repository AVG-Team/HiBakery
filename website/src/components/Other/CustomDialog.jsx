import { useContext, useEffect, useRef } from "react";
import Logo from "../../assets/img/logo/HiBakery-logo.png";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
export default function CustomDialog({ isOpen, onClose, productName, productPrice, product }) {
    const dialogRef = useRef(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            dialogRef.current?.focus();
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleAddToCart = () => {
        // Kiểm tra xem product có dữ liệu không
        if (!product) {
            console.error("Không có thông tin sản phẩm để thêm vào giỏ hàng.");
            return;
        }

        // Chuẩn bị dữ liệu sản phẩm trước khi thêm vào giỏ
        const productToAdd = {
            id: product.id, // Đảm bảo có id
            name: productName, // Tên sản phẩm
            price: productPrice, // Giá sản phẩm
            // Thêm các thông tin khác của sản phẩm nếu cần
            ...product,
        };

        console.log("Sản phẩm được thêm vào giỏ hàng:", productToAdd);

        // Thêm sản phẩm vào giỏ hàng - truyền trực tiếp object sản phẩm
        addToCart(productToAdd);

        // Đóng dialog sau khi thêm vào giỏ hàng
        onClose();
    };

    // Debug: Kiểm tra giỏ hàng hiện tại
    useEffect(() => {
        const cartData = sessionStorage.getItem("cart");
        if (cartData) {
            try {
                const parsedCart = JSON.parse(cartData);
                console.log("Giỏ hàng hiện tại:", parsedCart);
            } catch (error) {
                console.error("Lỗi khi đọc giỏ hàng:", error);
            }
        } else {
            console.log("Giỏ hàng trống.");
        }
    }, []);

    const formattedPrice = typeof productPrice === "number" ? productPrice.toLocaleString() : productPrice;

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <div
                        ref={dialogRef}
                        tabIndex="-1"
                        className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                    >
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                <div>
                                    <img src={Logo} alt="HiBooking" className="w-4/12 mx-auto" />
                                </div>
                                <div className="mt-2">
                                    <p className="text-2xl font-semibold text-Light-Apricot-500">
                                        Bạn muốn thêm {productName} vào giỏ hàng?
                                    </p>
                                    <p className="text-2xl font-semibold text-Light-Apricot-500">
                                        Giá: {formattedPrice} VNĐ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center px-4 py-3 bg-gray-50">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border-0 border-transparent rounded-md shadow-sm bg-Coral-Pink-300 hover:bg-Deep-Tea-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Coral-Pink-300 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleAddToCart}
                            >
                                Thêm vào giỏ hàng
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Deep-Tea-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm hover:border-Deep-Tea-300"
                                onClick={onClose}
                            >
                                Huỷ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
