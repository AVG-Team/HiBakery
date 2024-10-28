import PropTypes from "prop-types";
import { useEffect } from "react";
import ProductDetail from "./components/ProductDetail.jsx";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts.js";

ProductDetailPage.propTypes = {
    title: PropTypes.string,
};

export default function ProductDetailPage(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    let { id } = useParams();
    id = parseInt(id);

    const { product, fetchProduct } = useProducts();
    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    return (
        // Todo : when the top of the page header is not pushed down
        <div className="flex justify-center mt-20 overflow-hidden">
            <ProductDetail product={product} />
            {/*<div className="flex flex-col items-start p-1.5 text-xs bg-zinc-100 rotate-[1.5664767548527059rad] text-stone-300 max-md:hidden">*/}
            {/*    <img loading="lazy"*/}
            {/*         src="https://cdn.builder.io/api/v1/image/assets/TEMP/812e695b95afc70cff6c987bdb1c256f7a672b63aae17d17ad294dadd4f7593c?placeholderIfAbsent=true&apiKey=3abcd0b3a02d454c939536d464120375"*/}
            {/*         alt="" className="object-contain self-center aspect-square w-[7px]"/>*/}
            {/*    <div className="bg-stone-300 min-h-[25px]">.. ....................</div>*/}
            {/*    <img loading="lazy"*/}
            {/*         src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f1119443c36d85aa0e63e187ee6e71863c809154b2e7ab7158f94f7b76a7d3?placeholderIfAbsent=true&apiKey=3abcd0b3a02d454c939536d464120375"*/}
            {/*         alt="" className="object-contain aspect-square mt-[1160px] w-[7px] max-md:mt-10 max-md:ml-2"/>*/}
            {/*</div>*/}
        </div>
    );
}
