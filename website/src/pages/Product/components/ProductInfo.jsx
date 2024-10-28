import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import PropTypes from "prop-types";
import useCatgories from "../../../hooks/useCategories";
import { useEffect } from "react";

ProductInfo.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        categoryId: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,
};

const SIZE_PRODUCT = [
    { id: 1, size: "Small" },
    { id: 2, size: "Medium" },
    { id: 3, size: "Large" },
];

export default function ProductInfo({ product }) {
    const [selectedSize, setSelectedSize] = useState(SIZE_PRODUCT[0].size);
    const [quantity, setQuantity] = useState(1);
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(product.price);
    const { category, fetchCategory } = useCatgories();

    useEffect(() => {
        fetchCategory(product.categoryId);
    }, [product.categoryId]);

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    // Prepare order data for the cart
    const orderData = {
        productId: product.id,
        productTitle: product.title,
        price: product.price,
        size: selectedSize,
        quantity: quantity,
        imagePath: product.imagePath,
    };

    return (
        <div className="flex flex-col ml-5 w-[58%]">
            <div className="flex flex-col grow">
                <h1 className="self-start text-5xl font-semibold leading-none text-center text-Coral-Pink-500 max-md:text-4xl whitespace-nowrap">
                    {product.title}
                </h1>
                {/* Rating stars section remains unchanged */}
                <div className="flex flex-col items-start pl-3 mt-1.5 w-full">
                    <div className="flex gap-2.5 ml-4 mt-3 text-xl leading-none text-center text-black whitespace-nowrap">
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

                    <div className="mt-3.5">
                        <span className="text-3xl font-semibold text-Coral-Pink-300">{formattedPrice}</span>
                    </div>
                    <div className="flex items-center self-stretch gap-5 mt-4">
                        <label className="self-stretch my-auto mr-10 text-base font-medium text-center text-black">
                            Size
                        </label>
                        <div className="flex flex-col self-stretch justify-center w-40">
                            <select
                                name="size"
                                value={selectedSize}
                                onChange={handleSizeChange}
                                className="w-full text-center rounded-md border-0 py-2 text-gray-900 shadow-sm min-h-[45px]
                                ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Coral-Pink-300 focus:outline-0"
                            >
                                {SIZE_PRODUCT.map((item) => (
                                    <option key={item.id} value={item.size}>
                                        {item.size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center self-stretch gap-5 mt-4">
                        <label
                            htmlFor="quantity"
                            className="self-stretch my-auto mr-2 text-base font-medium text-center text-black"
                        >
                            Quantity
                        </label>
                        <div className="flex flex-col self-stretch justify-center w-40">
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-full text-center rounded-md border-0 py-2 pr-2 text-gray-900 shadow-sm min-h-[45px]
                                ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Coral-Pink-300 focus:outline-0"
                                min="1"
                                max="10"
                            />
                        </div>
                        <AddToCartBtn orderData={orderData} />
                    </div>
                </div>
                <div className="flex pt-3 mt-8 text-lg text-black border-t">
                    <p className="ml-3 mr-5 font-medium">Category:</p>
                    <button
                        className="p-0 uppercase bg-transparent border-none text-Coral-Pink-300 hover:cursor-pointer hover:text-Coral-Pink-300"
                        type="button"
                    >
                        {category.name}
                    </button>
                </div>
            </div>
        </div>
    );
}

// AddToCartBtn.jsx
