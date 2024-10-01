import AddToCartBtn from './AddToCartBtn';
import PropTypes from "prop-types";

ProductInfo.propTypes = {
    product: PropTypes.object,
};

export default function ProductInfo({product}) {
    let priceFormat = product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    return (
        <div className="flex flex-col ml-5 w-[58%]">
            <div className="flex flex-col grow">
                <h1 className="self-start text-6xl leading-none text-center text-black max-md:text-4xl">
                    {product.name}
                </h1>
                <div className="flex flex-col items-start pl-3 mt-1.5 w-full">
                    <div
                        className="flex gap-2.5 ml-4 mt-3 text-xl leading-none text-center text-black whitespace-nowrap">
                        <div className="grow my-auto">{product.rating}</div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 key={star}
                                 className={`size-6 mr-1 ${star <= product.rating ? "text-yellow-500" : "text-gray-300"}`}>
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                      clipRule="evenodd"/>
                            </svg>
                        ))}
                    </div>
                    <div className="flex gap-5 items-center self-stretch mt-3.5">
                        <label className="self-stretch my-auto text-base font-medium text-center text-black mr-10">
                            Size
                        </label>
                        <div className="flex flex-col justify-center self-stretch w-40">
                            <select
                                name="country"
                                autoComplete="size"
                                className="w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm  min-h-[43px]
                                ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Coral-Pink-300 focus:outline-0"
                            >
                                {product.size.map((size) => (
                                    <option key={size} value={size}>{size} cm</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-3.5">
                        <span className="text-3xl font-semibold text-Coral-Pink-300">{priceFormat} VND</span>
                    </div>
                    <div className="flex gap-5 items-center self-stretch mt-3.5">
                        <label htmlFor="quantity"
                               className="self-stretch my-auto text-base font-medium text-center text-black mr-2">
                            Quantity
                        </label>
                        <div className="flex flex-col justify-center self-stretch w-40">
                            <input
                                type="number"
                                id="quantity"
                                className="w-full text-center rounded-md border-0 py-1.5 pr-2 text-gray-900 shadow-sm min-h-[43px]
                                ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Coral-Pink-300 focus:outline-0"
                                min="1"
                                defaultValue="1"
                                max="10"
                            />
                        </div>
                        <AddToCartBtn/>
                    </div>
                </div>
                <div className="border-t mt-8 text-black flex text-lg pt-3">
                    <p className="ml-3 mr-5 font-medium">Category : </p> <a className="text-Coral-Pink-300 uppercase hover:cursor-pointer hover:text-Coral-Pink-300" href="#"> {product.category}</a>
                </div>
            </div>
        </div>
    );
}