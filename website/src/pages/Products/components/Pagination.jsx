import PropTypes from "prop-types";

export default function Pagination({
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    onPageChange,
}) {
    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            onPageChange(newPage); // Chuyển đến trang mới
        }
    };

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white sm:px-6">
            <div className="flex justify-between flex-1 sm:hidden">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setPreviousPage();
                    }}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setNextPage();
                    }}
                    className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav aria-label="Pagination" className="inline-flex gap-5 -space-x-px rounded-md shadow-sm isolate">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setPreviousPage();
                            }}
                            disabled={!previousEnabled}
                            className="relative inline-flex items-center px-2 py-2 border-0 rounded-full text-Coral-Pink-500 outline-0 focus:z-20 focus:outline-offset-0 bg-Coral-Pink-100 hover:bg-Deep-Tea-300 hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)} // Truyền số trang đúng
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white cursor-default rounded-xl hover:bg-Coral-Pink-500 hover:text-white bg-Coral-Pink-300 focus:z-20 focus:outline-offset-0 hover:ring-0 ${
                                    currentPage === page ? "bg-Light-Apricot-500 hover:bg-Light-Apricot-700" : ""
                                }`}
                            >
                                {page + 1} {/* Hiển thị số trang từ 1 */}
                            </button>
                        ))}
                        <button
                            disabled={!nextEnabled}
                            onClick={(e) => {
                                e.preventDefault();
                                setNextPage();
                            }}
                            className="relative inline-flex items-center px-2 py-2 ml-5 border-0 rounded-full text-Coral-Pink-500 outline-0 focus:z-20 focus:outline-offset-0 bg-Coral-Pink-100 hover:bg-Deep-Tea-300 hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setNextPage: PropTypes.func.isRequired,
    setPreviousPage: PropTypes.func.isRequired,
    nextEnabled: PropTypes.bool.isRequired,
    previousEnabled: PropTypes.bool.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
