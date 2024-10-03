import StarRating from '../../../components/Other/StarRating.jsx';
import Comment from './Comment.jsx'

export default function CommentReview() {
    return (
        <main className="flex flex-col rounded-none w-full">
            <h1 className="z-10 self-start text-2xl leading-none text-black mt-5">
                Add a review
            </h1>
            <section>
                <form action="" className="flex flex-col items-start px-6 pt-3.5 pb-7 mt-9 w-full rounded-2xl bg-zinc-300 bg-opacity-30 max-md:px-5 max-md:max-w-full">
                    <div className="flex">
                        <h2 className="text-xl leading-none text-black mr-10 mt-1">Reviews of your products :</h2>
                        <div aria-label="Rating input" tabIndex="0">
                            <StarRating/>
                        </div>
                    </div>

                    <div
                        className="flex overflow-hidden flex-col self-stretch mt-5 text-base max-md:mt-10 max-md:max-w-full">
                        <Comment/>
                    </div>
                    <div
                        className="flex flex-col self-end mt-6 font-medium text-center text-Coral-Pink-300 whitespace-nowrap w-[85px] max-md:mr-2.5">
                        <button
                            type="submit"
                            className="flex overflow-hidden flex-col justify-center items-center px-4 py-1 w-full bg-white rounded-md border border-Coral-Pink-300 border-solid
                        hover:border-Coral-Pink-300 hover:text-white hover:bg-Coral-Pink-300 focus:outline-none focus:ring-2 focus:ring-Coral-Pink-300 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}