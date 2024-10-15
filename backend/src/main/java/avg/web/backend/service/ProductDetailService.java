package avg.web.backend.service;

import avg.web.backend.entities.ProductDetail;
import avg.web.backend.entities.Products;

import java.util.Optional;

public interface ProductDetailService {
    Optional<ProductDetail> getProductDetailById(String id);
    Optional<ProductDetail> getProductDetailByProductId(Long productId);
}
