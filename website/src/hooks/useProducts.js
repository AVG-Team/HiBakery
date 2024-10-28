import { useState, useEffect } from "react";
import productApi from "../services/api/Client/productApi";
import productDetailApi from "../services/api/Client/productDetailApi";
import imageApi from "../services/api/Client/imageApi";

const productCache = new Map(); // Cache để lưu trữ chi tiết sản phẩm và hình ảnh

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
                const [salesResponse, popularResponse, productsResponse] = await Promise.all([
                    productApi.getSales(),
                    productApi.getPopular(7),
                    productApi.getAll(),
                ]);

                const enrichedSalesProducts = await enrichProductData(salesResponse.result);
                setSalesProducts(enrichedSalesProducts);

                const enrichedPopularProducts = await enrichProductData(popularResponse.result);
                setPopularProducts(enrichedPopularProducts);

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
        if (productCache.has(id)) {
            setProduct(productCache.get(id)); // Lấy từ cache nếu có
            return;
        }

        setLoading(true);
        console.log("Fetching product...");
        try {
            const response = await productApi.get(id);
            const detailResponse = await productDetailApi.get(response.result.id);
            const imageResponse = await imageApi.get(detailResponse.result.imageId);

            const enrichedProduct = {
                id: response.result.id,
                categoryId: response.result.categoryId,
                title: response.result.title,
                price: detailResponse.result.price,
                imagePath: imageResponse.result.path,
                description: response.result.description,
                ...detailResponse.result,
            };

            productCache.set(id, enrichedProduct); // Lưu vào cache
            console.log("Enriched product:", enrichedProduct);
            setProduct(enrichedProduct);
        } catch (err) {
            console.error("Error fetching product:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByCategory = async (categoryId) => {
        try {
            setLoading(true);
            console.log("Fetching products by category...", categoryId);
            const categoryResponse = await productApi.getByCategory(categoryId || null);

            // Giới hạn số lượng sản phẩm trả về
            const limitedProducts = categoryResponse.result.slice(0, 20);
            const enrichedCategoryProducts = await enrichProductData(limitedProducts);
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

        const productIds = products.map((product) => product.id);
        const uncachedIds = productIds.filter((id) => !productCache.has(id));

        if (uncachedIds.length > 0) {
            await fetchProductDetailsAndImages(uncachedIds);
        }

        return products.map((product) => ({
            ...product,
            ...productCache.get(product.id)?.details,
            imagePath: productCache.get(product.id)?.imagePath,
        }));
    };

    const fetchProductDetailsAndImages = async (productIds) => {
        const detailsResponses = await Promise.all(productIds.map((id) => productDetailApi.get(id)));
        const imageIds = detailsResponses.map((res) => res.result.imageId).filter(Boolean);
        const imageResponses = await Promise.all(imageIds.map((id) => imageApi.get(id)));

        detailsResponses.forEach((res, index) => {
            const productId = res.result.id;
            productCache.set(productId, {
                details: res.result,
                imagePath: imageIds[index]
                    ? imageResponses.find((img) => img.result.id === imageIds[index]).result.path
                    : null,
            });
        });
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
