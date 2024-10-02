import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Item = ({ id, img, title, description, price, quantity, onQuantityChange, onRemove }) => {
    const total = price * quantity;

    return (
        <div className="flex items-center justify-between px-4 py-3 mb-2 bg-white border-2 rounded-lg shadow">
            <div className="flex items-center space-x-4">
                <div className="flex justify-center w-8">
                    <input type="checkbox" className="w-4 h-4" />
                </div>
                <img src={img} alt={title} className="object-cover h-20 rounded-lg w-36" />
                <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <span className="w-24 font-semibold text-center">{price.toLocaleString()} ₫</span>
                <div className="flex items-center justify-center w-24 space-x-2">
                    <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => onQuantityChange(id, quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <span className="w-24 font-semibold text-center">{total.toLocaleString()} ₫</span>
                <div className="flex justify-center w-24">
                    <button className="text-gray-500" onClick={() => onRemove(id)}>
                        <FontAwesomeIcon icon={faTrash} className="w-5 h-5 hover:text-Light-Apricot-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;
