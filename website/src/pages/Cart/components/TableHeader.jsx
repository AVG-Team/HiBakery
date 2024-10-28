const TableHeader = () => (
    <div className="flex items-center justify-between p-4 mb-3 bg-white border-b-2 rounded-lg shadow">
        <div className="flex items-center space-x-4">
            <div className="flex justify-center w-8">
                <input type="checkbox" className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-semibold">Sản phẩm</h3>
        </div>
        <div className="flex items-center space-x-8">
            <span className="w-24 font-semibold text-center">Giá</span>
            <span className="w-24 font-semibold text-center">Số lượng</span>
            <span className="w-24 font-semibold text-center">Tổng tiền</span>
            <span className="w-24 font-semibold text-center"></span>
        </div>
    </div>
);

export default TableHeader;
