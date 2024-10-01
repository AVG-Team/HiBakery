import { useState } from "react";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import TableHeader from "./components/TableHeader";
import Item from "./components/Item";
import OrderSummary from "./components/OrderSummary";

const Table = ({ items, onQuantityChange, onRemove }) => (
    <div className="flex flex-col w-full px-40 mt-10">
        <TableHeader />
        {items.map((item) => (
            <Item key={item.id} {...item} onQuantityChange={onQuantityChange} onRemove={onRemove} />
        ))}
    </div>
);

Table.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

const ItemCarousel = ({ image, title, price }) => {
    return (
        <div className="flex flex-col items-start justify-center w-48">
            <img className="object-cover w-48 h-48 rounded-lg" src={image} alt={title} />
            <p className="mt-2 text-lg font-bold">{title}</p>
            <p className="my-2 text-sm text-Light-Apricot-500">{price}</p>
            <button className="w-full px-3 py-2 font-semibold text-white rounded-lg bg-Coral-Pink-500 hover:bg-Coral-Pink-300">
                Order now
            </button>
        </div>
    );
};

ItemCarousel.propTypes = {
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
                    <ItemCarousel key={index} image={item.image} title={item.title} price={item.price} />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 left-15 top-1/2 hover:bg-opacity-75"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 w-10 h-10 p-2 transition-all transform -translate-y-1/2 rounded-full bg-Coral-Pink-500 top-1/2 hover:bg-opacity-75"
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

export default function Cart() {
    const [items, setItems] = useState([
        {
            id: 0,
            img: "https://via.placeholder.com/150",
            title: "Strawberry Cake",
            description: "Strawberry Cake is a fresh cake with a strawberry flavor",
            price: 10,
            quantity: 1,
        },
        {
            id: 1,
            img: "https://via.placeholder.com/150",
            title: "Strawberry Cake",
            description: "Strawberry Cake is a fresh cake with a strawberry flavor",
            price: 10,
            quantity: 1,
        },
        {
            id: 2,
            img: "https://via.placeholder.com/150",
            title: "Strawberry Cake",
            description: "Strawberry Cake is a fresh cake with a strawberry flavor",
            price: 10,
            quantity: 1,
        },
        // ... other items
    ]);

    const [offers, setOffers] = useState([
        { image: "https://via.placeholder.com/150", title: "Cupcake 1", price: "500VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 2", price: "600VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 3", price: "700VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 4", price: "550VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 5", price: "650VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 6", price: "750VND" },
        { image: "https://via.placeholder.com/150", title: "Cupcake 7", price: "800VND" },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full pt-20">
            <div className="flex flex-row items-center justify-between w-full max-w-6xl ">
                <h1 className="text-3xl font-semibold text-Coral-Pink-500">Giỏ hàng</h1>
                <div className="relative flex items-center p-2 ml-10 bg-white border-2 rounded-lg border-Coral-Pink-500">
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-Coral-Pink-500" />
                    <input type="text" placeholder="Tìm kiếm" className="w-full pl-2 border-none focus:outline-none" />
                </div>
            </div>

            <Table items={items} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
            <div className="flex flex-row items-center justify-end w-full px-40 mt-4">
                <div className="flex flex-row px-2 py-2 border-2 rounded-lg border-Coral-Pink-500">
                    <span className="px-4 font-semibold text-md text-slate-400">Discount </span>
                    <input
                        type="text"
                        placeholder="add discount code"
                        className="w-full pl-6 border-none rounded-lg text-md focus:outline-none"
                    />
                </div>
            </div>
            <div className="w-full px-40 mt-5 ">
                <OrderSummary order={40000} offers={0} delivery={15000} total={55000} />
            </div>
            <div className="w-full px-40 mt-5">
                <div className="w-full p-4 bg-white ">
                    <h2 className="mb-4 text-xl font-semibold">Other Products</h2>
                    <Carousel items={offers} />
                </div>
            </div>
        </div>
    );
}
