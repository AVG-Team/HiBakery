import data_fake from '../../../mocks/FakeDataProduct.json'
import ProductCard from "../../../components/Other/ProductCard.jsx";

const relatedProducts = data_fake.relatedProducts;

function RelatedProducts() {
    return (
        <section className="mt-56 border-t pt-10">
            <h2 className="self-start text-4xl leading-none text-center text-black">Related Products</h2>
            <div className="mt-20 ml-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="gap-5 max-md:flex-col grid grid-cols-4">
                    {relatedProducts.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RelatedProducts;