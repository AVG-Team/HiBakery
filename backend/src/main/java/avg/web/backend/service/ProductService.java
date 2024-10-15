package avg.web.backend.service;

import avg.web.backend.entities.Orders;
import avg.web.backend.dto.request.OrderBillRequest;
import avg.web.backend.entities.Products;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Optional<Products> getProductById(Long id);
}
