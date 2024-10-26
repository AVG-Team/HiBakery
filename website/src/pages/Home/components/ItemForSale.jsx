import PropTypes from "prop-types";
const Item = ({ item }) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="relative flex">
                <div className="relative rounded-xl">
                    <img alt="Item" className="relative object-cover w-64 h-64 rounded-lg" src={item.imagePath} />
                </div>
                <div className="absolute bottom-0 p-4 text-white rounded-bl-xl rounded-tr-xl bg-Light-Apricot-500">
                    <p className="text-3xl font-bold">15%</p>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p className="mt-4 text-lg font-bold">{item.title}</p>
                <div className="px-3 py-2 mt-2 rounded-lg text-Coral-Pink-500 bg-Light-Apricot-500">
                    <p className="text-sm font-bold">6 Days Remaining</p>
                </div>
            </div>
        </div>
    );
};

function ItemForSale({ products }) {
    return (
        <div className="flex flex-row mt-20 gap-14">
            {Array.isArray(products) ? (
                products.map((item) => <Item key={item.title} item={item} />)
            ) : (
                <p className="text-Coral-Pink-300">No products available</p>
            )}
        </div>
    );
}

ItemForSale.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

Item.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemForSale;
