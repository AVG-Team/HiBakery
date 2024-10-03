package avg.web.backend.controller;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.entities.Products;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/products")
public class ProductsController extends BaseController<Products, ProductsRequest, Long> {


    @Override
    public ResponseEntity<Products> create(ProductsRequest request) {
        return null;
    }

    @Override
    public ResponseEntity<Products> update(Long id, ProductsRequest request) {
        return null;
    }

    @Override
    public ResponseEntity<Products> delete(ProductsRequest request) {
        return null;
    }

    @Override
    public ResponseEntity<Products> get(ProductsRequest request) {
        return null;
    }

    @Override
    public ResponseEntity<List<Products>> getAll() {
        return null;
    }
}
