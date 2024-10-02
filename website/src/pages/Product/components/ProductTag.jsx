import PropTypes from "prop-types";

ProductTag.prototype = {
    tags: PropTypes.array,
}

// eslint-disable-next-line react/prop-types
export default function ProductTag({tags}) {
    return (
        <aside
            className="w-0 h-fit flex overflow-hidden flex-col grow pt-3.5 pb-14 mt-7 font-medium text-center rounded-2xl border border-black border-solid">
            <h3 className="self-center text-3xl leading-none text-black">Tag</h3>
            <div
                className="flex-wrap flex pr-12 pl-4 mt-8 w-full text-sm text-red-600">
                {/* eslint-disable-next-line react/prop-types */}
                {tags.map((tag, index) => (
                    <div key={index}
                         className={`gap-1.5 mb-3 px-3 py-0.5 mr-3 w-fit bg-red-50 rounded-full border border-red-400 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>
                        {tag}
                    </div>
                ))}
            </div>
        </aside>
    );
}