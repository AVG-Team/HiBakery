import HowDoesItWork from "./components/HowDoesItWork";
import ItemForSale from "./components/ItemForSale";
import PopularItems from "./components/PopularItems";
import SearchByFood from "./components/SearchByFood";
import SuggestOrder from "./components/SuggestOrder";
import SupportItem from "./components/SupportItem";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center w-full">
                <ItemForSale />
                <HowDoesItWork />
                <PopularItems />
                <SupportItem />
                <SearchByFood />
                <SuggestOrder />
            </div>
        </main>
    );
}
