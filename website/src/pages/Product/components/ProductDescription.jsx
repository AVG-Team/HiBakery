import PropTypes from "prop-types";
import ProductTag from "./ProductTag.jsx";
import ProductComment from "./CommentCard.jsx";
import CommentReview from "./CommentReview.jsx";

ProductDescription.prototype = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        categoryId: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

function getHashFromUrl() {
    return window.location.hash.substring(1); // Loại bỏ dấu '#'
}

// eslint-disable-next-line react/prop-types
export default function ProductDescription({ product }) {
    let tabDetail = getHashFromUrl() === "" ? "description" : getHashFromUrl();

    return (
        <section className="mt-24">
            <div className="flex gap-5">
                <div className="flex flex-col w-[77%]">
                    <div className="flex flex-col w-full text-2xl text-black">
                        <div className="flex flex-wrap items-start gap-6 leading-none text-center border-b border-black border-solid shrink-0">
                            <a className="flex flex-col" href="#description">
                                <h2 className="self-center text-black">Mô tả sản phẩm</h2>
                                <div
                                    className={`shrink-0 mt-[0.36rem] px-3 h-1 ${
                                        tabDetail === "description"
                                            ? "bg-Coral-Pink-300 border-Coral-Pink-300 border-solid border"
                                            : ""
                                    }`}
                                />
                            </a>
                            <a className="flex flex-col" href="#review">
                                <div className="flex self-start ml-3 text-black">
                                    Review <p>(2)</p>
                                </div>
                                <div
                                    className={`shrink-0 mt-[0.36rem] px-16 h-1 ${
                                        tabDetail === "review"
                                            ? "bg-Coral-Pink-300 border-Coral-Pink-300 border-solid border"
                                            : ""
                                    }`}
                                />
                            </a>
                        </div>
                        <div
                            className={`self-start mt-2 leading-6 ${tabDetail === "description" ? "" : "hidden"}`}
                            id="description"
                        >
                            {/* eslint-disable-next-line react/prop-types */}
                            <p className="py-4 mt-4 leading-8">{product.description}</p>
                        </div>
                        <div
                            className={`self-start mt-2 leading-6 pt-10 ${tabDetail === "review" ? "" : "hidden"}`}
                            id="review"
                        >
                            <ProductComment
                                name="Huy"
                                comment="Bánh Kem , Ngọt Đủ Vị , Hợp Vị Tôi"
                                rating={4}
                                time="10/01/2024 11:25:00"
                            />
                            <br />
                            <ProductComment
                                name="Huy"
                                comment="Bánh Kem , Ngọt Đủ Vị , Hợp Vị Tôi"
                                rating={4}
                                time="10/01/2024 11:25:00"
                            />
                        </div>
                        <div className={`mt-5 ${tabDetail === "review" ? "" : "hidden"}`}>
                            <CommentReview />
                        </div>
                    </div>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                {/* <ProductTag tags={product.tags} /> */}
            </div>
        </section>
    );
}
