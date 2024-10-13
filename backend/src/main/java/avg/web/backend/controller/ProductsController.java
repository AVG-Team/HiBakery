package avg.web.backend.controller;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ApiResponse;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController("/products")
@RequiredArgsConstructor
public class ProductsController extends BaseController<ProductsResponse, ProductsRequest, Long> {

    private ProductsService productsService;

    @Override
    public ApiResponse<ProductsResponse> create(ProductsRequest request) {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.create(request))
                .code(200)
                .build();
    }

    @Override
    public ApiResponse<ProductsResponse> update(Long id, ProductsRequest request) {
        return null;
    }

    @Override
    public ApiResponse<ProductsResponse> delete(ProductsRequest request) {
        return null;
    }

    @Override
    public ApiResponse<ProductsResponse> get(ProductsRequest request) {
        return null;
    }

    @Override
    public ApiResponse<ProductsResponse> getAll() {
        return null;
    }
}
