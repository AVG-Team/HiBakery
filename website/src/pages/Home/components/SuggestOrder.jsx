import PropTypes from "prop-types";

const Item = ({ title, highlight, description, imageUrl, position }) => {
    return (
        <div className="flex h-72 w-[70%] mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
            {position ? (
                <>
                    {/* Phần hình ảnh bên phải */}
                    <div className="w-[70%]">
                        <img src={imageUrl} alt={highlight} className="object-cover w-full h-full" />
                    </div>
                    {/* Phần văn bản bên trái */}
                    <div className="flex flex-col justify-center w-[30%] px-8 ">
                        <h2 className="text-2xl font-bold">
                            {title} <span className="text-Coral-Pink-500">{highlight}</span>
                        </h2>
                        <p className="mt-4 text-sm text-gray-600">{description}</p>
                        <button className="px-6 py-3 mt-8 font-semibold text-white rounded-full shadow bg-Coral-Pink-500 hover:bg-Coral-Pink-600">
                            PROCEED TO ORDER
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {/* Phần văn bản bên trái */}
                    <div className="flex flex-col justify-center w-[30%] px-8 ">
                        <h2 className="text-2xl font-bold">
                            {title} <span className="text-Coral-Pink-500">{highlight}</span>
                        </h2>
                        <p className="mt-4 text-sm text-gray-600">{description}</p>
                        <button className="px-6 py-3 mt-8 font-semibold text-white rounded-full shadow bg-Coral-Pink-500 hover:bg-Coral-Pink-600">
                            PROCEED TO ORDER
                        </button>
                    </div>

                    {/* Phần hình ảnh bên phải */}
                    <div className="w-[70%]">
                        <img src={imageUrl} alt={highlight} className="object-cover w-full h-full" />
                    </div>
                </>
            )}
        </div>
    );
};
Item.propTypes = {
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    position: PropTypes.bool,
};

export default function SuggestOrder() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-20">
            <Item
                title="Best deals"
                highlight="Crispy Sandwiches"
                description="Enjoy the large size of sandwiches. Complete perfect size of sandwiches."
                imageUrl="https://via.placeholder.com/600x400"
                position={false}
            />
            <Item
                title="Celebrate parties with"
                highlight="Fried Chicken"
                description="Eat hot fried chicken served with crispy skin and juicy insides. Perfect for parties!"
                imageUrl="https://via.placeholder.com/600x400"
                position={true}
            />
            <Item
                title="Wanna eat hot & spicy"
                highlight="Pizza?"
                description="Feel the hot and spicy taste with our freshly made pizzas. Add some fire to your meal!"
                imageUrl="https://via.placeholder.com/600x400"
                position={false}
            />
        </div>
    );
}
