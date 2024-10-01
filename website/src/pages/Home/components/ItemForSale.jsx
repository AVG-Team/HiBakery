const Item = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="relative flex">
                <div className="relative rounded-xl">
                    <img
                        alt="Item"
                        className="relative object-cover w-64 h-64 rounded-lg"
                        src="https://via.placeholder.com/150"
                    />
                </div>
                <div className="absolute bottom-0 p-4 text-white rounded-bl-xl rounded-tr-xl bg-Light-Apricot-500">
                    <p className="text-3xl font-bold">15%</p>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p className="mt-4 text-lg font-bold">Item Name</p>
                <div className="px-3 py-2 mt-2 rounded-lg text-Coral-Pink-500 bg-Light-Apricot-500">
                    <p className="text-sm font-bold">6 Days Remaining</p>
                </div>
            </div>
        </div>
    );
};

export default function ItemForSale() {
    return (
        <div className="flex flex-row mt-20 gap-14">
            {[...Array(4)].map((_, i) => (
                <Item key={i} />
            ))}
        </div>
    );
}
