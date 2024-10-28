import { useState } from "react";
import PropTypes from "prop-types";

Shipping.propTypes = {
    nextStep: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        flatHouseNo: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        district: PropTypes.string,
        ward: PropTypes.string,
        note: PropTypes.string,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
};

export default function Shipping({ nextStep, formData, updateFormData }) {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!privacyPolicy) return alert("Làm ơn đồng ý chính sách bảo mật trước khi tiếp tục");

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phoneNumber ||
            !formData.address ||
            !formData.city ||
            !formData.district ||
            !formData.ward
        ) {
            return alert("Làm ơn điền đầy đủ thông tin");
        }
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="mb-4 font-semibold">Contact Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Họ của bạn"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Tên của bạn"
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    className="p-2 border rounded"
                />
            </div>

            <h3 className="mb-4 font-semibold">Shipping Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="flatHouseNo"
                    value={formData.flatHouseNo}
                    onChange={handleChange}
                    placeholder="Số nhà"
                    className="col-span-2 p-2 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    placeholder="Phường"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Quận"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Thành phố"
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Ghi chú"
                    className="col-span-2 p-2 border rounded"
                />
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="same-address"
                    className="mr-2"
                    checked={privacyPolicy}
                    onChange={() => setPrivacyPolicy(!privacyPolicy)}
                />
                <label htmlFor="same-address" className="text-sm">
                    Chấp nhận chính sách mua hàng và giao hàng của chúng tôi
                </label>
            </div>

            <button type="submit" className="w-full p-3 bg-[#f05a7e] text-white rounded">
                Tiếp tục
            </button>
        </form>
    );
}
