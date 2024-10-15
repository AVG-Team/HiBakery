package avg.web.backend.controller;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ApiResponse;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.service.impl.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductsController {

    @Autowired
    private ProductsService productsService;


    @PostMapping("")
    public ApiResponse<ProductsResponse> create(ProductsRequest request) {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ProductsResponse> update(Long id, ProductsRequest request) {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.update(id,request))
                .code(200)
                .build();
    }


    @DeleteMapping("")
    public ApiResponse<ProductsResponse> delete(ProductsRequest request) {
        productsService.delete(request.getId());
        return ApiResponse.<ProductsResponse>builder()
                .code(200)
                .build();
    }


    @GetMapping("{id}")
    public ApiResponse<ProductsResponse> get(Long id) {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<ProductsResponse> getAll() {
        return ApiResponse.<ProductsResponse>builder()
                .result(productsService.getAll())
                .code(200)
                .build();
    }
}
