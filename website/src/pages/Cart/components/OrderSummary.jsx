import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ order, offers, delivery, total, cart }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        // Kiểm tra nếu giỏ hàng có sản phẩm
        if (order > 0) {
            // Điều hướng đến trang thanh toán và truyền thông tin đơn hàng
            navigate("/thanh-toan", {
                state: {
                    orderDetails: {
                        cart: cart,
                        subtotal: order,
                        discountCode: offers,
                        deliveryFee: delivery,
                        total: total,
                    },
                },
            });
        } else {
            // Thông báo nếu giỏ hàng trống
            alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán");
        }
    };

    return (
        <div className="w-full p-6 bg-white border-2 rounded-lg shadow-md ">
            <h2 className="mb-4 text-xl font-semibold">Tóm tắt đơn hàng</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Sản phẩm</span>
                    <span>{order.toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between text-green-600">
                    <span>Giảm giá</span>
                    <span>{offers ? "-10%" : "0%"} ₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Vận chuyển</span>
                    <span>{delivery.toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between pt-2 font-semibold border-t">
                    <span>Tổng</span>
                    <span>{total.toLocaleString()} ₫</span>
                </div>
            </div>
            <button
                onClick={handleCheckout}
                className="w-full px-4 py-2 mt-4 font-semibold text-white transition duration-300 rounded bg-Coral-Pink-500 hover:bg-Coral-Pink-700"
            >
                Thanh Toán
            </button>
        </div>
    );
};

OrderSummary.propTypes = {
    order: PropTypes.number.isRequired,
    offers: PropTypes.number.isRequired,
    delivery: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    cart: PropTypes.array.isRequired,
};

export default OrderSummary;
