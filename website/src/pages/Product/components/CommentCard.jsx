import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { vi } from 'date-fns/locale'

UserComment.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string,
    time: PropTypes.string,
    rating: PropTypes.number,
    avatar: PropTypes.string,
};

export default function UserComment({name, comment, time, rating, avatar = "https://via.placeholder.com/150"}) {
    const timeDate = new Date(time)
    const timeAgo = formatDistanceToNow(timeDate, { addSuffix: true, locale: vi });

    return (
        <article className="flex flex-wrap gap-5 items-start px-6 py-6 text-2xl tracking-tight bg-white rounded-[32px_32px_32px_0px] shadow-[0px_1px_6px_rgba(0,0,0,0.2)] max-md:px-5">
            <img
                loading="lazy"
                src={avatar}
                alt="User avatar"
                className="object-contain shrink-0 aspect-[1.05] rounded-[32px] w-[60px]"
            />
            <div className="flex flex-col min-w-[362]">
                <div className="flex gap-2 items-start self-start">
                    <h2 className="font-medium text-zinc-900">{name}</h2>
                    <div className="flex mt-1.5 mr-5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 key={star}
                                 className={`size-6 ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}>
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                      clipRule="evenodd"/>
                            </svg>
                        ))}
                    </div>
                    <time className="text-zinc-900 text-opacity-40">{timeAgo}</time>
                </div>
                <p className="mt-1.5 text-zinc-900">{comment}</p>
            </div>
        </article>
    );
}