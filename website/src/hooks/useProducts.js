import { useState, useEffect } from "react";
import productApi from "../services/api/Client/productApi";
import productDetailApi from "../services/api/Client/productDetailApi";
import imageApi from "../services/api/Client/imageApi";

export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [salesProducts, setSalesProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [productByPriceAsc, setProductByPriceAsc] = useState([]);
    const [productByPriceDesc, setProductByPriceDesc] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                console.log("Fetching products...");
                // Fetch basic product data
                const [salesResponse, popularResponse, productsResponse] = await Promise.all([
                    productApi.getSales(),
                    productApi.getPopular(7),
                    productApi.getAll(),
                ]);
                // Fetch details and images for sales products
                const enrichedSalesProducts = await enrichProductData(salesResponse.result);
                setSalesProducts(enrichedSalesProducts);

                // Fetch details and images for popular products
                const enrichedPopularProducts = await enrichProductData(popularResponse.result);
                setPopularProducts(enrichedPopularProducts);

                // Fetch details and images for all products
                const enrichedProducts = await enrichProductData(productsResponse.result);
                setProducts(enrichedProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        fetchProductsByPriceAsc();
        fetchProductsByPriceDesc();
    }, []);

    const fetchProduct = async (id) => {
        setLoading(true);
        console.log("Fetching product...");
        const response = await productApi.get(id);
        const detail = await productDetailApi.get(response.result.id);
        const image = await imageApi.get(detail.result.imageId);

        const enrichedProduct = {
            id: response.result.id,
            categoryId: response.result.categoryId,
            title: response.result.title,
            price: detail.result.price,
            imagePath: image.result.path,
            ...detail.result,
        };
        console.log("Enriched product:", enrichedProduct);
        setProduct(enrichedProduct);
    };

    const fetchProductsByCategory = async (categoryId) => {
        try {
            setLoading(true);
            console.log("Fetching products by category...");
            console.log("Category ID:", categoryId);
            const categoryResponse = await productApi.getByCategory(categoryId || null);

            const enrichedCategoryProducts = await enrichProductData(categoryResponse.result);

            setProductByCategory(enrichedCategoryProducts);
        } catch (err) {
            console.error("Error fetching products by category:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByPriceAsc = async () => {
        try {
            setLoading(true);
            console.log("Fetching products by price ascending...");
            const response = await productApi.sortProductsByPriceAsc();
            const enrichedProducts = await enrichProductData(response.result);
            setProductByPriceAsc(enrichedProducts);
        } catch (err) {
            console.error("Error fetching products by price ascending:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByPriceDesc = async () => {
        try {
            setLoading(true);
            console.log("Fetching products by price descending...");
            const response = await productApi.sortProductsByPriceDesc();
            const enrichedProducts = await enrichProductData(response.result);
            setProductByPriceDesc(enrichedProducts);
        } catch (err) {
            console.error("Error fetching products by price descending:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

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
                categoryId: product.categoryId,
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
        error,
        loading,
        product,
        products,
        salesProducts,
        popularProducts,
        productByCategory,
        productByPriceAsc,
        productByPriceDesc,
        fetchProduct,
        fetchProductsByCategory,
    };
};

export default useProducts;
