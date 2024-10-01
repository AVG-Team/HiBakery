
const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function Pagination() {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-5">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-full px-2 py-2 text-Coral-Pink-500
                            border-0 outline-0 focus:z-20 focus:outline-offset-0
                            bg-Coral-Pink-100 hover:bg-Deep-Tea-300 hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6">
                                <path fillRule="evenodd"
                                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a
                            // href="#"
                            aria-current="page"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl
                            hover:bg-Coral-Pink-300 hover:text-white bg-Coral-Pink-300 text-white cursor-default
                            focus:z-20 focus:outline-offset-0 hover:ring-0"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900
                            rounded-xl hover:bg-Coral-Pink-300 hover:text-white
                            ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:ring-0"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900
                            rounded-xl hover:bg-Coral-Pink-300 hover:text-white
                            ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:ring-0"
                        >
                            3
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900
                            rounded-xl hover:bg-Coral-Pink-300 hover:text-white
                            ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:ring-0"
                        >
                            4
                        </a>
                        {/*<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">*/}
                        {/*  ...*/}
                        {/*</span>*/}
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-full px-2 py-2 text-Coral-Pink-500
                            border-0 outline-0 focus:z-20 focus:outline-offset-0 ml-5
                            bg-Coral-Pink-100 hover:bg-Deep-Tea-300 hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6">
                                <path fillRule="evenodd"
                                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
