import Location from "../../../assets/img/Icon/location.jpg";
import Order from "../../../assets/img/Icon/order.jpg";
import Payment from "../../../assets/img/Icon/pay-advanced.jpg";
import Meat from "../../../assets/img/Icon/enjoy-meats.jpg";
import PropTypes from "prop-types";

const Item = ({ item }) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center mb-2">
                <img className="h-28 w-28" src={item.icon} alt={item.icon} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center w-64">
                    <p className="text-lg font-bold">{item.title}</p>
                    <p className="text-sm text-center whitespace-pre-line text-slate-400">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default function HowDoesItWork() {
    const items = [
        {
            id: 1,
            icon: Location,
            title: "Tùy chọn lựa chọn",
            description: "Chọn địa điểm nơi thực phẩm của bạn sẽ được giao",
        },
        { id: 2, icon: Order, title: "Đặt hàng", description: "Đặt hàng nhanh chóng giao hàng tận nơi" },
        {
            id: 3,
            icon: Payment,
            title: "Thanh toán",
            description: "Thanh toán bằng cách chuyển khoản hoặc thanh toán khi nhận hàng",
        },
        {
            id: 4,
            icon: Meat,
            title: "Thưởng thức bữa ăn",
            description: "Thưởng thức bữa ăn ngon miệng tại nhà",
        },
    ];
    return (
        <div className="w-full mt-20 bg-Light-Apricot-500/[20%] py-10">
            <div className="flex items-center justify-center p-4">
                <p className="text-3xl font-bold text-center text-Coral-Pink-500">Nó hoạt động như thế nào?</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-10 p-4">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.object,
};
