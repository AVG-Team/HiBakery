import axiosClient from "../axiosClient";

const orderDetailApi = {
    get(id) {
        const url = `/order-details/${id}`;
        return axiosClient.get(url);
    },

    create(data) {
        const url = "/order-details";
        return axiosClient.post(url, data);
    },

    update(id, data) {
        const url = `/order-details/${id}`;
        return axiosClient.patch(url, { id, ...data });
    },

    remove(id) {
        const url = `/order-details/${id}`;
        return axiosClient.delete(url);
    },
};

export default orderDetailApi;
