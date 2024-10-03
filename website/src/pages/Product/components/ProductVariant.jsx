const variants = [
    { type: 'Phân loại', options: ['available', 'Disabled', 'available', 'available', 'Disabled', 'Disabled'] },
    { type: 'Size', options: ['available', 'available', 'Disabled', 'available', 'available', 'Disabled'] },
];

export default function ProductVariant() {
    return (
        <div className="mt-10">
            <div className="flex gap-5">
                <div className="flex flex-col w-[16%]">
                    <div className="flex flex-col self-stretch my-auto text-base font-medium text-center text-black">
                        {variants.map((variant, index) => (
                            <div key={index} className={index === 1 ? 'self-center mt-32' : ''}>
                                {variant.type}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[84%]">
                    <div className="flex flex-col w-full font-medium text-center whitespace-nowrap">
                        <div className="flex flex-col px-3.5 py-2 w-full bg-white rounded-md border border-solid border-black border-opacity-30">
                            {variants.map((variant, variantIndex) => (
                                <div key={variantIndex} className="flex gap-2 mt-1.5 flex-wrap">
                                    {variant.options.map((option, optionIndex) => (
                                        <button
                                            key={optionIndex}
                                            className={`flex overflow-hidden flex-col justify-center items-center px-4 py-1 w-[98px] rounded-md border border-solid ${
                                                option === 'Disabled'
                                                    ? 'border-blue-700 text-xs text-blue-700'
                                                    : 'border-black text-base text-black'
                                            }`}
                                            disabled={option === 'Disabled'}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}