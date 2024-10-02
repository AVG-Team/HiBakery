import { useState } from 'react';

export default function CharacterCounter() {
    const [text, setText] = useState('');
    const maxCharacters = 250;

    const handleChange = (event) => {
        if (event.target.value.length <= maxCharacters) {
            setText(event.target.value);
        }
    };

    return (
        <div className="flex overflow-hidden flex-col self-stretch mt-5 text-base max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col gap-2 p-3 w-full rounded bg-slate-50 max-md:max-w-full">
                <textarea
                    id="reviewText"
                    className="leading-6 text-black max-md:max-w-full pl-3 pt-3"
                    placeholder="Enter your review of the product"
                    rows="4"
                    aria-label="Your review"
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <div className="self-end mt-2 leading-none text-right text-gray-500">
                    {text.length} / {maxCharacters}
                </div>
            </div>
        </div>
    );
}
