import Hero from "../../../assets/img/photo-banner.jpg";
export default function Banner() {
    return (
        <div className="pt-24 pb-10 bg-Light-Apricot-500">
            <div className="container flex flex-row items-center px-20 mx-auto">
                <div className="flex flex-col items-start justify-center w-[50%] text-left ">
                    {/* <div className="flex flex-col items-center justify-center"> */}
                    <h1 className="my-4 text-6xl font-bold leading-tight text-white">Are you starving?</h1>
                    <p className="mb-8 font-light leading-normal text-md">
                        Within a few clicks, find meals that are accessible near you?
                    </p>
                    <div className="w-full p-5 bg-white border rounded-lg">
                        <div className="flex flex-row py-2 mb-2 border-b-[1px] border-slate-200">
                            <div className="flex flex-row gap-4 mx-2">
                                <button className="px-2 py-1 text-white rounded-lg bg-Light-Apricot-200">
                                    Dilivery
                                </button>
                                <button className="px-2 py-1 rounded-lg bg-slate-100">Pickup</button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 py-2">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    {/* <MapPin className="w-5 h-5 text-red-500" /> */}
                                </div>
                                <input
                                    type="text"
                                    className="block w-full py-2 pl-10 pr-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter Your Address"
                                />
                            </div>
                            <button className="px-5 text-white rounded-lg bg-Coral-Pink-500 whitespace-nowrap hover:bg-Coral-Pink-200">
                                Find Food
                            </button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="flex justify-center w-1/2 py-6">
                    <img className="w-full max-w-md " alt="Cake" src={Hero} />
                </div>
            </div>
        </div>
    );
}
