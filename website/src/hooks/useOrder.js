import { useEffect, useState } from "react";
import productApi from "../services/api/Client/productApi";
import orderApi from "../services/api/Client/orderApi";

const useOrder = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getOrder(1);
    }, []);

    const getOrder = async (id) => {
        try {
            setLoading(true);
            const response = await orderApi.get(id);
            setOrder(response);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { order, loading, error };
};
export default useOrder;
