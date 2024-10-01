const TableHeader = () => (
    <div className="flex items-center justify-between p-4 mb-3 bg-white border-b-2 rounded-lg shadow">
        <div className="flex items-center space-x-4">
            <div className="flex justify-center w-8">
                <input type="checkbox" className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-semibold">Products</h3>
        </div>
        <div className="flex items-center space-x-8">
            <span className="w-24 font-semibold text-center">Prices</span>
            <span className="w-24 font-semibold text-center">Quantity</span>
            <span className="w-24 font-semibold text-center">Total</span>
            <span className="w-24 font-semibold text-center">Action</span>
        </div>
    </div>
);

export default TableHeader;
