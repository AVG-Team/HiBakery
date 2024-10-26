import CustomTag from "./CustomTag.jsx";
import WidgetBefore from "../../../assets/img/widget_before.jpg";
import StarRating from "../../../components/Other/StarRating.jsx";
import PropTypes from "prop-types";
export default function CategoryFilter({ categories, onCategoryChange }) {
    const handleCategorySelect = (categoryId) => {
        onCategoryChange(categoryId);
    };
    return (
        <div className="border-4 border-[#E5E3E4] p-4 rounded-lg w-64 2xl:w-11/12 relative ml-3 mr-3">
            <div className="absolute top-[-1rem] left-[35%] w-3/12">
                <img src={WidgetBefore} alt="widget before" />
            </div>
            <div className="absolute bottom-[-1rem] left-[49%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-Coral-Pink-300 size-6"
                >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
            </div>
            {/* Tiêu đề */}
            <div className="my-4 border-b-2">
                <h2 className="mb-4 text-xl font-bold text-center text-black 2xl:text-2xl">Phân loại chức năng</h2>
            </div>
            {/* Tất cả sản phẩm */}
            <div className="mb-4 border-b-2">
                <h3 className="font-semibold text-black">Tất cả thể loại bánh</h3>
                <div className="mt-2 mb-4">
                    {categories.map((category) => (
                        <CustomTag
                            key={category.id}
                            label={category.name}
                            id={category.id}
                            handleCategorySelect={handleCategorySelect}
                        />
                    ))}
                </div>
            </div>

            {/* Giá */}
            <div className="mb-4 border-b-2 pb-7">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-black">Giá</h3>
                    <p className="text-black opacity-60">.000 VNĐ</p>
                </div>
                <div className="flex items-center justify-center mt-2 text-black">
                    <input
                        type="number"
                        placeholder="Từ"
                        className="w-5/12 p-1 mr-2 text-center border rounded focus:outline-Deep-Tea-300"
                        min="0"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-black size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="number"
                        placeholder="Đến"
                        className="w-5/12 p-1 ml-2 text-center border rounded focus:outline-Deep-Tea-300"
                        min="0"
                        max="10000"
                    />
                </div>
            </div>

            {/*Rating */}
            <div className="mb-3">
                <h3 className="font-semibold text-black">Đánh giá</h3>
                <div className="flex justify-center">
                    <StarRating />
                </div>
            </div>
        </div>
    );
}

CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onCategoryChange: PropTypes.func.isRequired,
};
