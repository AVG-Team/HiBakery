import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Item = ({ image, title, price }) => {
    return (
        <div className="flex flex-col items-start justify-center w-48">
            <img className="object-cover w-48 h-48 rounded-lg" src={image} alt={title} />
            {/* Thêm fixed height và line-clamp cho title */}
            <p className="mt-2 mb-2 text-lg font-bold h-14 line-clamp-2 hover:line-clamp-none">{title}</p>
            <p className="my-3 text-sm text-Light-Apricot-500">{price}</p>
            <button className="w-full px-3 py-2 font-semibold text-white rounded-lg bg-Coral-Pink-500 hover:bg-Coral-Pink-300">
                Order now
            </button>
        </div>
    );
};

Item.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

const Carousel = ({ items }) => {
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const visibleItems = [...items.slice(startIndex), ...items.slice(0, startIndex)].slice(0, 5);

    return (
        <div className="container relative w-full mx-auto">
            <div className="flex flex-row items-center justify-center w-full gap-4 py-10 overflow-hidden rounded-lg">
                {visibleItems.map((item, index) => (
                    <Item key={index} image={item.imagePath} title={item.title} price={item.price} />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 left-10 top-1/2 hover:bg-opacity-75"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 right-10 top-1/2 hover:bg-opacity-75"
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-white" />
            </button>
            <div className="absolute flex flex-row w-full gap-2 transform -translate-x-1/2 bottom-2 left-[97%]">
                {items.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setStartIndex(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                            i === startIndex ? "bg-Coral-Pink-500" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const PopularItems = ({ products }) => {
    return (
        <div className="w-full py-20 mt-10">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center p-4 mb-5">
                    <p className="text-3xl font-bold text-center text-Coral-Pink-500">Popular Items</p>
                </div>
                <Carousel items={products} />
            </div>
        </div>
    );
};

PopularItems.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            imagePath: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default PopularItems;
