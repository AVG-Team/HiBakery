// eslint-disable-next-line react/prop-types
export default function CustomTag({ label, id, handleCategorySelect }) {
    return (
        <label className="items-center inline-block mb-2 mr-3">
            <button
                onClick={() => handleCategorySelect(id)}
                className="px-2 py-1 text-white border-0 rounded-full bg-Coral-Pink-300 hover:bg-Deep-Tea-300"
            >
                {label}
            </button>
        </label>
    );
}
