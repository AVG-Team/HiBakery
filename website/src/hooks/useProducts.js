import { useState, useEffect } from "react";
import productApi from "../services/api/Client/productApi";
import productDetailApi from "../services/api/Client/productDetailApi";
import imageApi from "../services/api/Client/imageApi";

export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [salesProducts, setSalesProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                console.log("Fetching products...");
                // Fetch basic product data
                const [salesResponse, popularResponse] = await Promise.all([
                    productApi.getSales(),
                    productApi.getPopular(7),
                ]);
                console.log("Fetched products:", salesResponse, popularResponse);
                // Fetch details and images for sales products
                const enrichedSalesProducts = await enrichProductData(salesResponse.result);
                setSalesProducts(enrichedSalesProducts);

                // Fetch details and images for popular products
                const enrichedPopularProducts = await enrichProductData(popularResponse.result);
                setPopularProducts(enrichedPopularProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const enrichProductData = async (products) => {
        if (!products?.length) return [];

        try {
            // Fetch product details
            const detailsPromises = products.map((product) => productDetailApi.get(product.id));
            const detailsResponses = await Promise.all(detailsPromises);
            const details = detailsResponses.map((res) => res.result);

            // Fetch images
            const imagePromises = details
                .map((detail) => (detail.imageId ? imageApi.get(detail.imageId) : null))
                .filter(Boolean);

            const imageResponses = await Promise.all(imagePromises);
            const images = imageResponses.map((res) => res.result);

            // Combine all data
            return products.map((product, index) => ({
                id: product.id,
                title: product.title,
                price: details[index]?.price,
                imagePath: images[index]?.path,
                ...details[index],
            }));
        } catch (err) {
            console.error("Error enriching product data:", err);
            throw err;
        }
    };

    return {
        salesProducts,
        popularProducts,
        loading,
        error,
    };
};

export default useProducts;
