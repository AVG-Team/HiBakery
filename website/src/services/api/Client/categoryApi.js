import axiosClient from "../axiosClient";

const categoryApi = {
    getAll: (params) => {
        const url = "/product-categories";
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/product-categories/${id}`;
        return axiosClient.get(url);
    },
    create: (data) => {
        const url = "/product-categories";
        return axiosClient.post(url, data);
    },
    update: (data) => {
        const url = `/product-categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove: (id) => {
        const url = `/product-categories/${id}`;
        return axiosClient.delete(url);
    },
};

export default categoryApi;
