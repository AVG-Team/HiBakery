package avg.web.backend.service.impl;

import avg.web.backend.entities.ProductDetail;
import avg.web.backend.entities.Products;
import avg.web.backend.repository.ProductDetailRepository;
import avg.web.backend.repository.ProductRepository;
import avg.web.backend.service.ProductDetailService;
import avg.web.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductDetailServiceImpl implements ProductDetailService {

    @Autowired
    private ProductDetailRepository productDetailRepository;

    @Override
    public Optional<ProductDetail> getProductDetailById(String id) {
        return productDetailRepository.findById(id);
    }

    @Override
    public Optional<ProductDetail> getProductDetailByProductId(Long productId) {
        return productDetailRepository.findByProductId(productId);
    }
}