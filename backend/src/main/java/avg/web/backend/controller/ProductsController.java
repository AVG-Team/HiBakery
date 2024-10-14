package avg.web.backend.controller;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ApiResponse;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
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
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.update(id,request))
                .code(200)
                .build();
    }

    @Override
    public ApiResponse<ProductsResponse> delete(ProductsRequest request) {
        productsService.delete(request.getId());
        return ApiResponse.<ProductsResponse>builder()
                .code(200)
                .build();
    }

    @Override
    public ApiResponse<ProductsResponse> get(Long id) {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.findById(id).orElse(null))
                .code(200)
                .build();
    }

    @Override
    public ApiResponse<ProductsResponse> getAll() {
        System.out.println("hehe");
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.findAll())
                .code(200)
                .build();
    }
}
