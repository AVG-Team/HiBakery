import { useEffect, useState } from "react";
import Shipping from "./Shipping";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Success from "./Success";
import Logo from "../../../assets/img/logo/HiBakery-logo.png";
import CheckIcon from "../../../assets/img/Icon/check.svg";
import CheckedIcon from "../../../assets/img/Icon/activated_check.svg";
import TrashCan from "../../../assets/img/Icon/trash-can.svg";
import PropTypes from "prop-types";

MultiStepForm.propTypes = {
    orderDetails: PropTypes.shape({
        subtotal: PropTypes.number,
        discount: PropTypes.number,
        deliveryFee: PropTypes.number,
        total: PropTypes.number,
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                productId: PropTypes.string.isRequired,
                imagePath: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default function MultiStepForm({ orderDetails = { cart: [] } }) {
    // Default to empty cart
    const [subtotal, setSubtotal] = useState(orderDetails.subtotal);
    const [discountAmount, setDiscountAmount] = useState(orderDetails.discount);
    const [total, setTotal] = useState(orderDetails.total);

    useEffect(() => {
        // Whenever subtotal or discountAmount changes, recalculate total
        setTotal(subtotal - discountAmount);
    }, [subtotal, discountAmount]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        flatHouseNo: "",
        address: "",
        city: "",
        district: "",
        ward: "",
        note: "",
        discountCode: "",
        deliveryTime: "",
        paymentMethod: 1,
        imagePayment: "",
        orderItems: [], // This should be populated based on the context
    });

    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

    const discountItems = [
        // Your discount items here...
    ];

    const [tempDiscountCode, setTempDiscountCode] = useState("");

    const handleChange = (e) => {
        setTempDiscountCode(e.target.value);
    };

    const handleApply = () => {
        const discountItem = discountItems.find((item) => item.code === tempDiscountCode && item.active);
        if (discountItem) {
            const discountValue = (subtotal * discountItem.percent) / 100;
            setDiscountAmount(discountValue);
            updateFormData({
                discountCode: tempDiscountCode,
            });
        } else {
            setDiscountAmount(0);
            updateFormData({
                discountCode: "",
            });
        }
    };

    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-100 md:flex-row">
            {/* Order Summary Section */}
            <div className="flex flex-col flex-wrap content-center w-full px-20 py-5 bg-white md:w-1/2">
                <div className="flex items-center mb-4">
                    <img src={Logo} alt="Logo" className="h-16" />
                </div>
                <div className="flex items-center mb-4">
                    <button className="mr-2">&#8592;</button>
                    <h2 className="mt-4 mb-4 text-xl font-semibold">Order Summary</h2>
                </div>

                <div className="h-64 overflow-y-auto pr-2 w-full sm:w-[28rem] lg:w-[37.5rem]">
                    {/* Display order items */}
                    {orderDetails.cart && orderDetails.cart.length > 0 ? (
                        orderDetails.cart.map((item) => (
                            <div key={item.productId} className="flex items-start justify-between mb-6">
                                <div className="flex items-center">
                                    <img src={item.imagePath} alt={item.name} className="w-16 h-16 mr-4" />
                                    <div>
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="mb-1 text-base">
                                        {(item.price * item.quantity).toLocaleString()} VND
                                    </p>
                                    <button className="p-2 rounded hover:bg-gray-200">
                                        <img src={TrashCan} alt="Delete" className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items in the cart</p>
                    )}
                </div>

                {/* Order summary details */}
                <div className="grid w-full grid-rows-4 mx-auto md:w-2/4">
                    <div className="mt-4">
                        <label className="block mb-2">Gift Card / Discount code</label>
                        <div className="flex">
                            <input
                                type="text"
                                name="discountCode"
                                value={tempDiscountCode}
                                onChange={handleChange}
                                className="flex-1 p-2 border rounded-l"
                                placeholder="Enter code"
                            />
                            <button
                                onClick={handleApply}
                                className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 mt-4 border-t">
                        <div className="flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>{subtotal.toLocaleString()} VND</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Shipping Fee</p>
                            <p className="text-[#0B8494]">FREE</p>
                        </div>
                        {discountAmount > 0 && (
                            <div className="flex justify-between mb-2">
                                <p>Discount</p>
                                <p className="text-[#0B8494]">-{discountAmount.toLocaleString()} VND</p>
                            </div>
                        )}
                        <div className="flex justify-between font-semibold text-red-500">
                            <p>Total due</p>
                            <p>{total.toLocaleString()} VND</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step Form Section */}
            <div className="w-full p-20 mt-5 bg-white md:flex-1 md:p-30 md:mt-0">
                <div className="flex items-center justify-center mb-8 space-x-2 text-gray-500">
                    <h2 className={`text-sm md:text-base ${step >= 1 ? "text-[#f05a7e] font-semibold" : ""}`}>
                        Shipping
                    </h2>
                    <span className={`${step >= 2 ? "text-[#f05a7e]" : ""}`}>—</span>
                    <img className="h-4" src={step >= 2 ? CheckedIcon : CheckIcon} alt="check" />
                    <span className={`${step >= 2 ? "text-[#f05a7e]" : ""}`}>—</span>
                    <h2 className={`text-sm md:text-base ${step >= 2 ? "text-[#f05a7e] font-semibold" : ""}`}>
                        Delivery
                    </h2>
                    <span className={`${step >= 3 ? "text-[#f05a7e]" : ""}`}>—</span>
                    <img className="h-4" src={step >= 3 ? CheckedIcon : CheckIcon} alt="checked" />
                    <span className={`${step >= 4 ? "text-[#f05a7e]" : ""}`}>—</span>
                    <h2 className={`text-sm md:text-base ${step >= 3 ? "text-[#f05a7e] font-semibold" : ""}`}>
                        Payment
                    </h2>
                    <span className={`${step >= 4 ? "text-[#f05a7e]" : ""}`}>—</span>
                    <h2 className={`text-sm md:text-base ${step >= 4 ? "text-[#f05a7e] font-semibold" : ""}`}>
                        Success
                    </h2>
                </div>

                {step === 1 && <Shipping nextStep={nextStep} formData={formData} updateFormData={updateFormData} />}
                {step === 2 && (
                    <Delivery
                        nextStep={nextStep}
                        formData={formData}
                        prevStep={prevStep}
                        updateFormData={updateFormData}
                    />
                )}
                {step === 3 && (
                    <Payment
                        nextStep={nextStep}
                        formData={formData}
                        prevStep={prevStep}
                        updateFormData={updateFormData}
                    />
                )}
                {step === 4 && <Success prevStep={prevStep} formData={formData} updateFormData={updateFormData} />}
            </div>
        </div>
    );
}
