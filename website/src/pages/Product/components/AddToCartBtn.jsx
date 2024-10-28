import PropTypes from "prop-types";

export default function AddToCartBtn({ orderData }) {
    const addToCart = () => {
        // Get existing cart from session storage or initialize empty array
        const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

        // Check if the product already exists in cart with the same size
        const existingItemIndex = existingCart.findIndex(
            (item) => item.productId === orderData.productId && item.size === orderData.size,
        );

        if (existingItemIndex !== -1) {
            // Update quantity if item exists
            existingCart[existingItemIndex].quantity += orderData.quantity;
        } else {
            // Add new item if it doesn't exist
            existingCart.push(orderData);
        }

        // Save updated cart back to session storage
        sessionStorage.setItem("cart", JSON.stringify(existingCart));

        // Optional: Show success message
        alert("Product added to cart successfully!");
    };

    return (
        <label className="items-center inline-block h-auto my-auto mr-3">
            <button
                onClick={addToCart}
                className="p-3 font-medium text-white border-0 rounded-md shadow-lg bg-Coral-Pink-300 hover:bg-Deep-Tea-300"
            >
                Add To Cart
            </button>
        </label>
    );
}

AddToCartBtn.propTypes = {
    orderData: PropTypes.shape({
        productId: PropTypes.number.isRequired,
        productTitle: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,
};
