import { useState, useEffect } from "react";
import categoryApi from "../services/api/Client/categoryApi";

export const useCatgories = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                console.log("Fetching categories...");
                const response = await categoryApi.getAll();
                const data = response.result;
                setCategories(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError(err);
            }
        };
        fetchCategories();
    }, []);

    const fetchCategory = async (id) => {
        try {
            setLoading(true);
            console.log("Fetching category...", id);
            const response = await categoryApi.get(id);
            setCategory(response.result);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching products by category:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { categories, category, loading, error, fetchCategory };
};

export default useCatgories;
