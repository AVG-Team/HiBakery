package avg.web.backend.service.impl;

import avg.web.backend.entities.Bills;
import avg.web.backend.entities.Products;
import avg.web.backend.repository.BillsRepository;
import avg.web.backend.repository.ProductRepository;
import avg.web.backend.service.BillService;
import avg.web.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Optional<Products> getProductById(Long id) {
        return productRepository.findById(id);
    }
}