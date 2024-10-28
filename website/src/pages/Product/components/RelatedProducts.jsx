import ProductCard from "../../../components/Other/ProductCard.jsx";
import useProducts from "../../../hooks/useProducts.js";
import { useEffect } from "react";
import PropTypes from "prop-types";

RelatedProducts.propTypes = {
    categoryId: PropTypes.number,
};

function RelatedProducts({ categoryId }) {
    const { productByCategory, fetchProductsByCategory } = useProducts();

    useEffect(() => {
        console.log("Fetching products by category ID:", categoryId);
        fetchProductsByCategory(categoryId);
    }, [categoryId]);
    return (
        <section className="pt-10 mt-56 border-t">
            <h2 className="self-start text-4xl leading-none text-center text-black">Related Products</h2>
            <div className="mt-20 ml-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="grid grid-cols-4 gap-5 max-md:flex-col">
                    {productByCategory.slice(0, 8).map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RelatedProducts;
