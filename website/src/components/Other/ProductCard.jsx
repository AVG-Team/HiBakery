import { useState } from "react";
import CustomDialog from "./CustomDialog"; // Đảm bảo bạn đã tạo file này
import PropTypes from "prop-types";

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default function ProductCard({ product }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    let priceFormat = product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    const openDialog = (event) => {
        // Ngăn chặn hành động mặc định của thẻ a
        event.preventDefault();
        event.stopPropagation();
        setIsDialogOpen(true);
    };

    const closeDialog = () => setIsDialogOpen(false);

    return (
        <a
            className="group"
            href={!isDialogOpen ? "/san-pham/" + product.id : undefined}
            onClick={isDialogOpen ? (event) => event.preventDefault() : undefined}
        >
            <div className="relative flex justify-center">
                <img src={product.imagePath} alt="Product" className="w-full rounded-3xl" />
                <button
                    className="absolute bg-Coral-Pink-300 text-white py-2 px-3 rounded-2xl bottom-[-3rem] opacity-0 border-0 focus:outline-0
                    group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 ease hover:bg-Deep-Tea-300
                    "
                    onClick={openDialog} // Gọi hàm openDialog
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
            <h3 className="mt-4 font-semibold text-center text-Coral-Pink-500 text-md">{product.title}</h3>
            <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        key={star}
                        className={`size-6 mr-1 ${star <= 4 ? "text-yellow-500" : "text-gray-300"}`}
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ))}
            </div>
            <p className="mt-2 text-lg text-center text-black">{priceFormat} VNĐ</p>

            {isDialogOpen && (
                <CustomDialog
                    isOpen={isDialogOpen}
                    onClose={closeDialog}
                    productName={product.name}
                    productPrice={priceFormat}
                    product={product}
                />
            )}
        </a>
    );
}
