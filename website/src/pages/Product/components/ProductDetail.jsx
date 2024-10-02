import Breadcrumb from './Breadcrumb';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import PropTypes from "prop-types";
import data_fake from "../../../mocks/FakeDataProduct.json";

ProductDetail.propTypes = {
    id: PropTypes.number,
};

function ProductDetail({id}) {
    const product = data_fake.products.find(product => product.id === id);

    return (
        <main className="container px-40 3xl:px-0 flex flex-col mt-6 w-full justify-center">
            <Breadcrumb />
            <div className="flex flex-wrap gap-10 mt-10">
                <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                    <div className="self-center ml-6 w-10/12">
                        <div className="flex gap-5 px-10">
                            <ProductImage />
                            <ProductInfo product={product}/>
                        </div>
                    </div>
                    <ProductDescription product={product}/>
                    <RelatedProducts />
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;