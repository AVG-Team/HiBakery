import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Item = ({ item, onQuantityChange, onRemove }) => {
    const total = item.price * item.quantity;

    const handleIncrement = () => {
        onQuantityChange(item.id, item.quantity + 1);
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            onQuantityChange(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-between px-4 py-3 mb-2 bg-white border-2 rounded-lg shadow">
            <div className="flex items-center space-x-4">
                <div className="flex justify-center w-8">
                    <input type="checkbox" className="w-4 h-4" />
                </div>
                <img src={item.imagePath} alt={item.imagePath} className="object-cover h-20 rounded-lg w-36" />
                <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <span className="w-24 font-semibold text-center">{item.price.toLocaleString()} ₫</span>
                <div className="flex items-center justify-end">
                    <button
                        className="px-2 py-1 mr-2 text-white rounded-lg bg-Coral-Pink-500 hover:bg-Coral-Pink-300"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 text-center border-2 rounded-lg border-Coral-Pink-500 focus:outline-none"
                    />
                    <button
                        className="px-2 py-1 ml-2 text-white rounded-lg bg-Coral-Pink-500 hover:bg-Coral-Pink-300"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
                <span className="w-24 font-semibold text-center">{total.toLocaleString()} ₫</span>
                <div className="flex justify-center w-24">
                    <button className="text-gray-500" onClick={() => onRemove(item.id)}>
                        <FontAwesomeIcon icon={faTrash} className="w-5 h-5 hover:text-Light-Apricot-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Item;
