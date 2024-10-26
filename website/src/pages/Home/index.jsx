import useProducts from "../../hooks/useProducts";
import HowDoesItWork from "./components/HowDoesItWork";
import ItemForSale from "./components/ItemForSale";
import PopularItems from "./components/PopularItems";
import SearchByFood from "./components/SearchByFood";
import SuggestOrder from "./components/SuggestOrder";
import SupportItem from "./components/SupportItem";

const Home = () => {
    const { salesProducts, popularProducts, loading, error } = useProducts();

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center w-full">
                {salesProducts.length > 0 && <ItemForSale products={salesProducts} />}
                <HowDoesItWork />
                {popularProducts.length > 0 && <PopularItems products={popularProducts} />}
                <SupportItem />
                {popularProducts.length > 0 && <SearchByFood products={popularProducts} />}
                <SuggestOrder />
            </div>
        </main>
    );
};

export default Home;
