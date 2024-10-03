import PropTypes from "prop-types";

const OrderSummary = ({ order, offers, delivery, total }) => {
    return (
        <div className="w-full p-6 bg-white border-2 rounded-lg shadow-md ">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Order</span>
                    <span>{order.toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between text-green-600">
                    <span>Offers</span>
                    <span>-{offers.toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{delivery.toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between pt-2 font-semibold border-t">
                    <span>Total</span>
                    <span>{total.toLocaleString()} ₫</span>
                </div>
            </div>
            <button className="w-full px-4 py-2 mt-4 font-semibold text-white transition duration-300 rounded bg-Coral-Pink-500 hover:bg-Coral-Pink-700">
                Purchase
            </button>
        </div>
    );
};
OrderSummary.propTypes = {
    order: PropTypes.number.isRequired,
    offers: PropTypes.number.isRequired,
    delivery: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default OrderSummary;
