import PropTypes from "prop-types";

ProductImage.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        categoryId: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        // Add other product properties as needed
    }).isRequired,
};

export default function ProductImage({ product }) {
    return (
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <img
                loading="lazy"
                alt="Product"
                src={product.imagePath}
                className="object-contain mt-8 w-full rounded-2xl aspect-[1.14] max-md:mt-10"
            />
        </div>
    );
}
