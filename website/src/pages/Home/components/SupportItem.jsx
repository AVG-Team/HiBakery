import Location from "../../../assets/img/Icon/location2.jpg";
import Discount from "../../../assets/img/Icon/discount.jpg";
import Clock from "../../../assets/img/Icon/clock.jpg";
export default function SupportItem() {
    return (
        <div className="bg-Light-Apricot-500/[20%] p-2 mt-10 w-full">
            <div className="flex flex-row items-center justify-center py-10 px-72">
                <div className="flex flex-row items-center justify-center w-full py-2 bg-white shadow-lg rounded-xl shadow-Light-Apricot-300">
                    <div className="flex flex-row px-10 py-2 ">
                        <div className="flex items-center">
                            <img src={Discount} alt="Support Icon" className="w-32 h-32 p-2" />
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-xl font-bold text-center whitespace-pre-wrap text-Light-Apricot-500">
                                Giảm Giá <br /> Hằng Ngày
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row px-10 py-2 ">
                        <div className="flex items-center">
                            <img src={Location} alt="Support Icon" className="w-32 h-32 p-2" />
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-xl font-bold text-center whitespace-pre-wrap text-Light-Apricot-500">
                                Theo Dõi <br /> Trực Tiếp
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row px-10 py-2">
                        <div className="flex items-center">
                            <img src={Clock} alt="Support Icon" className="w-32 h-32 p-2" />
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-xl font-bold text-center whitespace-pre-wrap text-Light-Apricot-500">
                                Giao Hàng
                                <br />
                                Nhanh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
