import { useState } from "react";
import PropTypes from "prop-types";

Payment.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        paymentMethod: PropTypes.number,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Payment({ prevStep, nextStep, formData, updateFormData }) {
    const [selectedMethod, setSelectedMethod] = useState(formData.paymentMethod || "pay_on_delivery");

    const paymentMethods = [
        { id: 1, label: "Thanh toán khi nhận hàng", description: "Thanh toán khi nhận hàng", icons: [] },
        {
            id: 2,
            label: "Chuyển khoản ngân hàng trực tiếp",
            description: "Thanh toán trực tiếp qua tài khoản ngân hàng.",
            icons: [],
        },
        {
            id: 3,
            label: "Các phương thức thanh toán khác",
            description: "Thanh toán qua Momo, Zalo Pay, VNPAY",
            icons: ["momo", "zalopay", "vnpay"],
        },
    ];

    const handleMethodChange = (methodId) => {
        setSelectedMethod(methodId);
        updateFormData({ paymentMethod: methodId });
    };

    return (
        <div className="items-center justify-center block min-h-screen">
            <div className="w-full max-w-2xl p-6 bg-white rounded">
                <h3 className="mb-4 text-xl font-semibold text-pink-500">Phương thức thanh toán</h3>

                {/* Payment Methods List */}
                <div className="space-y-4">
                    {paymentMethods.map((method) => (
                        <label
                            key={method.id}
                            className="flex items-start p-3 transition border rounded-md cursor-pointer hover:border-pink-300"
                        >
                            <input
                                type="radio"
                                name="paymentMethod"
                                value={method.id}
                                checked={selectedMethod === method.id}
                                onChange={() => handleMethodChange(method.id)}
                                className="mt-1"
                            />
                            <div className="ml-3">
                                <span className="font-semibold">{method.label}</span>
                                <p className="text-sm text-gray-500">{method.description}</p>
                                {/* Display icons if available */}
                                {method.icons.length > 0 && (
                                    <div className="flex mt-2 space-x-2">
                                        {method.icons.includes("momo") && (
                                            <img
                                                src="https://developers.momo.vn/v3/vi/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png"
                                                alt="Momo"
                                                className="h-6"
                                            />
                                        )}
                                        {method.icons.includes("zalopay") && (
                                            <img
                                                src="https://brandlogos.net/wp-content/uploads/2022/05/zalopay-logo_brandlogos.net_fjcup.png"
                                                alt="Zalo Pay"
                                                className="h-6"
                                            />
                                        )}
                                        {method.icons.includes("vnpay") && (
                                            <img
                                                src="https://inkythuatso.com/uploads/images/2021/12/vnpay-logo-inkythuatso-01-13-16-26-42.jpg"
                                                alt="VNPAY"
                                                className="h-6"
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </label>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={prevStep}
                        className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
                    >
                        Quay lại
                    </button>
                    <button
                        onClick={nextStep}
                        className="px-6 py-2 bg-[#f05a7e] text-white rounded-md hover:bg-[#d0496c] transition duration-300"
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div>
    );
}
