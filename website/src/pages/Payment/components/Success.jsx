import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

Success.propTypes = {
    prevStep: PropTypes.func.isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Success({ prevStep, updateFormData }) {
    const [formData, setFormData] = useState(null);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [imagePayment, setImagePayment] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get formData from sessionStorage when component mounts
        const savedFormData = sessionStorage.getItem("formData");
        if (savedFormData) {
            const parsedFormData = JSON.parse(savedFormData);
            setFormData(parsedFormData);
            // Only update parent formData once when component mounts
            if (!formData) {
                updateFormData(parsedFormData);
            }
        } else {
            setError("No form data found in session");
        }
    }, []); // Remove updateFormData and navigate from dependencies

    const handlePrivacyPolicyChange = (e) => {
        setPrivacyPolicy(e.target.checked);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePayment(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData) {
            return alert("No form data available");
        }

        if (!privacyPolicy) {
            return alert("Please accept the privacy policy to continue");
        }

        // Compare with number 1 instead of string
        if (Number(formData.paymentMethod) !== 1 && !imagePayment) {
            return alert("Please upload an image of your payment");
        }

        setIsLoading(true);
        setError(null);

        try {
            const orderData = new FormData();
            // Ensure orderItems and other data is included
            const processedFormData = {
                ...formData,
                paymentMethod: Number(formData.paymentMethod),
            };

            console.log("Submitting order data:", processedFormData);
            orderData.append("orderData", JSON.stringify(processedFormData));

            if (imagePayment) {
                orderData.append("imagePayment", imagePayment);
            }

            const response = await axios.post("http://localhost:8080/api/orders", orderData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Order created successfully:", response.data);
            // Clear session storage after successful submission
            sessionStorage.removeItem("formData");
            navigate("/"); // Uncomment this when ready to redirect
        } catch (err) {
            console.error("Error creating order:", err);
            setError("Đã xảy ra lỗi khi xử lý đơn đặt hàng của bạn. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!formData) {
        return <div className="p-4 text-center">Đang tải dữ liệu biểu mẫu...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <h3 className="mb-4 text-lg font-semibold">Xác nhận thanh toán</h3>
            <div className="mb-4">
                <label className="block mb-2">Upload ảnh hoá đơn</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                />
                {imagePreview && <img src={imagePreview} alt="Payment" className="h-auto max-w-full mt-2" />}
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={privacyPolicy}
                        onChange={handlePrivacyPolicyChange}
                        className="mr-2"
                    />
                    <span>Tôi chấp nhận chính sách quyền riêng tư</span>
                </label>
            </div>

            <div className="relative mt-5">
                <p className="text-red-500 text-2xl absolute top-[-1rem] left-[-1rem]">*</p>
                <p className="mb-2 text-sm text-gray-500">
                    Nếu bạn thanh toán bằng tiền mặt, bạn có thể bỏ qua bước này
                </p>
            </div>

            {error && <div className="mb-4 text-red-500">{error}</div>}

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-[#f05a7e] text-[#f05a7e] rounded-md hover:bg-[#f05a7e] hover:text-white transition duration-300"
                    disabled={isLoading}
                >
                    Quay lại
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#f05a7e] text-white rounded-md hover:bg-[#d0496c] transition duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? "Processing..." : "Xác nhận"}
                </button>
            </div>
        </form>
    );
}
