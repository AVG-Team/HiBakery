// eslint-disable-next-line react/prop-types
export default function CustomTag({ label }) {
    return (
        <label className="items-center inline-block mr-3 mb-2">
            <button className="rounded-full bg-Coral-Pink-300 py-1 hover:bg-Deep-Tea-300 border-0">{label}</button>
        </label>
    );
}
