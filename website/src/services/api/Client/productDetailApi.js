import axiosClient from "../axiosClient";

const productDetailApi = {
    get(id) {
        const url = `/product-detail/${id}`;
        return axiosClient.get(url);
    },
    create(data) {
        const url = "/product-detail";
        return axiosClient.post(url, data);
    },
    update({ id, ...data }) {
        const url = `/product-detail/${id}`;
        return axiosClient.patch(url, { id, ...data });
    },
    remove(id) {
        const url = `/product-detail/${id}`;
        return axiosClient.delete(url);
    },
    getAll(params) {
        const url = "/product-detail";
        return axiosClient.get(url, { params });
    },
};

export default productDetailApi;
