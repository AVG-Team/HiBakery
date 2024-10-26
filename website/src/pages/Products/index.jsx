import CategoryFilter from "./components/Filter.jsx";
import ProductCard from "../../components/Other/ProductCard.jsx";
import Pagination from "./components/Pagination.jsx";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCategories from "../../hooks/useCategories.js";
import useProducts from "../../hooks/useProducts.js";
import { usePagination } from "react-use-pagination";
import { ITEMS_PER_PAGE } from "../../utils/constants"; // Ensure this is set to 8

Products.propTypes = {
    title: PropTypes.string,
};

export default function Products(props) {
    const { title } = props;
    const { categories } = useCategories();
    const [categoryId, setCategoryId] = useState("");
    const [sortOption, setSortOption] = useState("default"); // State for sorting option
    const { productByCategory, fetchProductsByCategory, productByPriceAsc, productByPriceDesc } = useProducts();

    // State to manage products to be displayed after sorting
    const [displayedProducts, setDisplayedProducts] = useState(productByCategory);

    // Pagination logic
    const { currentPage, setNextPage, setPreviousPage, nextEnabled, previousEnabled, setPage, startIndex, endIndex } =
        usePagination({ totalItems: displayedProducts.length, initialPageSize: ITEMS_PER_PAGE, initialPage: 1 });

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    useEffect(() => {
        fetchProductsByCategory(categoryId || "");
        setPage(1); // Reset pagination to the first page whenever category changes
    }, [categoryId]); // Only depend on categoryId

    useEffect(() => {
        // Set displayed products based on sorting option
        let sortedProducts;

        switch (sortOption) {
            case "priceAsc":
                sortedProducts = productByPriceAsc;
                break;
            case "priceDesc":
                sortedProducts = productByPriceDesc;
                break;
            default:
                sortedProducts = productByCategory; // Default to the original array
        }

        setDisplayedProducts(sortedProducts); // Update displayed products

        // Reset current page if it exceeds total pages
        if (currentPage > Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)) {
            setPage(1); // Reset to page 1
        }
    }, [sortOption, productByCategory, productByPriceAsc, productByPriceDesc]); // Update whenever these change

    const handleCategoryChange = (newCategoryId) => {
        console.log("Category changed:", newCategoryId);
        setCategoryId(newCategoryId);
    };

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
    };

    return (
        <main className="flex w-full mt-20 2xl:justify-center">
            <div className="w-full px-4 2xl:container">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl text-black font-semiBold">Sản Phẩm</h1>
                    <div className="flex text-black">
                        <p className="mr-2">Trang chủ &gt;</p> <p className="text-Deep-Tea-300">Sản phẩm</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-1/4 min-w-[250px]">
                        <div className="sticky top-4">
                            <div className="w-full mb-6">
                                <div className="relative w-full">
                                    <input
                                        className="w-full py-2 pl-3 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 pr-28 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
                                        placeholder="UI Kits, Dashboards..."
                                    />
                                    <button
                                        className="absolute top-1 right-1 flex items-center rounded bg-Coral-Pink-300 py-1 px-2.5 border-0 text-center text-sm text-white transition-all duration-300 ease hover:bg-Deep-Tea-300"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4 mr-2"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                            <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold text-black">Tất cả sản phẩm</h2>
                            <div className="flex items-center">
                                <p className="mr-2 text-black">Sắp xếp theo :</p>
                                <select
                                    className="p-1 text-black border border-gray-300 rounded-md focus:outline-none"
                                    onChange={handleSortChange}
                                >
                                    <option value="default">Tính năng</option>
                                    <option value="rating">Sắp xếp theo đánh giá</option>
                                    <option value="priceAsc">Giá : Từ thấp đến cao</option>
                                    <option value="priceDesc">Giá : Từ cao đến thấp</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {displayedProducts.slice(startIndex, endIndex + 1).map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))}
                        </div>

                        <div className="flex justify-center mt-5">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(displayedProducts.length / ITEMS_PER_PAGE)} // Update total pages based on displayed products
                                setNextPage={setNextPage}
                                setPreviousPage={setPreviousPage}
                                nextEnabled={nextEnabled}
                                previousEnabled={previousEnabled}
                                onPageChange={setPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setNextPage: PropTypes.func.isRequired,
    setPreviousPage: PropTypes.func.isRequired,
    nextEnabled: PropTypes.bool.isRequired,
    previousEnabled: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired,
};
