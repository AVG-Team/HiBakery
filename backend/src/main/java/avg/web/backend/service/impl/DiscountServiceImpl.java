package avg.web.backend.service.impl;

import avg.web.backend.entities.Discounts;
import avg.web.backend.entities.Products;
import avg.web.backend.repository.DiscountRepository;
import avg.web.backend.repository.ProductRepository;
import avg.web.backend.service.DiscountService;
import avg.web.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DiscountServiceImpl implements DiscountService {

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public Optional<Discounts> getDiscountByCode(String code) {
        return discountRepository.findByCode(code.trim().toUpperCase());
    }
}