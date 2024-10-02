import { useState } from 'react';

export default function Rating() {
    const [rating, setRating] = useState(0); // Lưu trữ giá trị rating người dùng chọn
    const [hover, setHover] = useState(0);   // Lưu trữ giá trị khi người dùng hover

    return (
        <div className="flex flex-col">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-8 mr-1 ${
                            (hover || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ))}
            </div>

            {/* Thẻ input hidden để lưu rating người dùng đã chọn */}
            <input type="hidden" name="rate" value={rating} />
        </div>
    );
}
