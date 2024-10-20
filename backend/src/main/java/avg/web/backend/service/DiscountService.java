package avg.web.backend.service;

import avg.web.backend.entities.Discounts;
import avg.web.backend.entities.Products;

import java.util.Optional;

public interface DiscountService {
    Optional<Discounts> getDiscountByCode(String code);
}
