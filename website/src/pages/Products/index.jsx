import CategoryFilter from "./components/Filter.jsx";
import ProductCard from "../../components/other/ProductCard.jsx";
import Pagination from "./components/Pagination.jsx";
import {useEffect} from "react";
import PropTypes from "prop-types";
import data from "../../mocks/FakeDataProduct.json";

Products.propTypes = {
    title: PropTypes.string,
};

export default function Products(props) {
    const products = data.products;
    const {title} = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main className="w-full flex 2xl:justify-center">
            <div className="2xl:container px-4 w-full">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-black text-3xl font-bold">Products</h1>
                    <div className="text-black flex">
                        <p className="mr-2">Home &gt;</p> <p className="text-Deep-Tea-300">Products</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-1/4 min-w-[250px]">
                        <div className="sticky top-4">
                            <div className="w-full mb-6">
                                <div className="relative w-full">
                                    <input
                                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                        placeholder="UI Kits, Dashboards..."
                                    />
                                    <button
                                        className="absolute top-1 right-1 flex items-center rounded bg-Coral-Pink-300 py-1 px-2.5 border-0 text-center text-sm text-white transition-all duration-300 ease hover:bg-Deep-Tea-300"
                                        type="button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-4 h-4 mr-2">
                                            <path fillRule="evenodd"
                                                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Search
                                    </button>
                                </div>
                            </div>
                            <CategoryFilter/>
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-black text-2xl font-semibold">All Products</h2>
                            <div className="flex items-center">
                                <p className="text-black mr-2">Sort by :</p>
                                <select className="text-black border border-gray-300 rounded-md p-1 focus:outline-none">
                                    <option>Featured</option>
                                    <option>Short by average rating</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {products.map((product) => (
                                <ProductCard product={product} key={product.id}/>
                            ))}
                        </div>

                        <div className="mt-5 flex justify-center">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}