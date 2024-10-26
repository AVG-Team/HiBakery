import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ image, title }) => {
    return (
        <div className="flex flex-col items-center justify-center w-48">
            <div className="flex items-center justify-center w-48 h-48 bg-white rounded-full">
                <img className="object-cover w-40 h-40 rounded-full" src={image} alt={title} />
            </div>
            <p className="mt-2 text-lg font-bold text-center h-14 line-clamp-2 hover:line-clamp-none">{title}</p>
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

    const visibleItems = [...items.slice(startIndex), ...items.slice(0, startIndex)].slice(0, 6);

    return (
        <div className="container relative w-full mx-auto">
            <div className="flex flex-row items-center justify-center w-full gap-4 py-10 overflow-hidden rounded-lg">
                {visibleItems.map((item, index) => (
                    <Item key={index} image={item.imagePath} title={item.title} price={item.price} />
                ))}
            </div>
            <p className="absolute top-0 w-20 h-10 p-2 text-lg transition-all transform -translate-y-1/2 right-36 hover:bg-opacity-75 text-Light-Apricot-600 hover:text-Light-Apricot-300">
                View all
            </p>
            <button
                onClick={prevSlide}
                className="absolute top-0 w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 right-24 hover:bg-opacity-75"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-0 w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 right-10 hover:bg-opacity-75"
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

export default function SearchByFood({ products }) {
    return (
        <div className="w-full py-20  bg-Light-Apricot-500/[20%]">
            <div className="flex justify-start p-4 mb-5">
                <p className="text-3xl font-bold text-Coral-Pink-500">Search By Food</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Carousel items={products} />
            </div>
        </div>
    );
}

SearchByFood.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
