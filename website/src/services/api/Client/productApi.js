import axiosClient from "../axiosClient";

const productApi = {
    getAll(params) {
        const url = "/products";
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = "/products";
        return axiosClient.post(url, data);
    },

    update(id, data) {
        const url = `/products/${id}`;
        return axiosClient.patch(url, data); // Passing only data here
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },

    getSales() {
        const url = "/products/sales";
        return axiosClient.get(url);
    },
    getPopular(top) {
        const url = `/products/populars/${top}`;
        return axiosClient.get(url);
    },
    getByCategory(categoryId) {
        const url = categoryId ? `/products/category?id=${categoryId}` : "/products/category"; // Use categoryId in the URL if it exists
        console.log("Category ID:", categoryId);
        return axiosClient.get(url);
    },
    sortProductsByPriceAsc() {
        const url = `/products/sort/priceAsc`;
        return axiosClient.get(url);
    },
    sortProductsByPriceDesc() {
        const url = `/products/sort/priceDesc`;
        return axiosClient.get(url);
    },
};

export default productApi;
