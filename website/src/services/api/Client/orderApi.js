import axiosClient from "../axiosClient";

const orderApi = {
    get(id) {
        const url = `/orders/${id}`;
        return axiosClient.get(url);
    },

    create(data) {
        const url = "/orders";
        return axiosClient.post(url, data);
    },

    update(id, data) {
        const url = `/orders/${id}`;
        return axiosClient.patch(url, { id, ...data });
    },

    remove(id) {
        const url = `/orders/${id}`;
        return axiosClient.delete(url);
    },
};

export default orderApi;
