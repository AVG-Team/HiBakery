import Breadcrumb from "./Breadcrumb";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import RelatedProducts from "./RelatedProducts";
import PropTypes from "prop-types";

ProductDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        categoryId: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,
};

function ProductDetail({ product }) {
    return (
        <main className="container flex flex-col justify-center w-full px-40 mt-6 3xl:px-0">
            <Breadcrumb />
            <div className="flex flex-wrap gap-10 mt-10">
                <div className="flex flex-col my-auto grow shrink-0 basis-0 w-fit">
                    <div className="self-center w-10/12 ml-6">
                        <div className="flex gap-5 px-10">
                            <ProductImage product={product} />
                            <ProductInfo product={product} />
                        </div>
                    </div>
                    <ProductDescription product={product} />
                    <RelatedProducts categoryId={product.categoryId} />
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;
