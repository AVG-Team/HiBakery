import axiosClient from "../axiosClient";

const imageApi = {
    get(id) {
        const url = `/image/${id}`;
        return axiosClient.get(url);
    },
    getAll(params) {
        const url = "/image";
        return axiosClient.get(url, { params });
    },
    create(data) {
        const url = "/image";
        return axiosClient.post(url, data);
    },
    update(id, data) {
        const url = `/image/${id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/image/${id}`;
        return axiosClient.delete(url);
    },
};

export default imageApi;
