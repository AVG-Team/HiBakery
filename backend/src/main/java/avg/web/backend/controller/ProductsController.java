package avg.web.backend.controller;

import avg.web.backend.dto.ProductsDTO;
import avg.web.backend.dto.ApiResponse;
import avg.web.backend.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductsController{


    private final ProductsService productsService;

    @PostMapping("")
    public ApiResponse<ProductsDTO> create(ProductsDTO request) {
        return ApiResponse.<ProductsDTO>builder()
                .result(productsService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ProductsDTO> update(@RequestParam("id") Long id, @RequestBody ProductsDTO request) {
        return ApiResponse.<ProductsDTO>builder()
                .result(productsService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<ProductsDTO> delete(@RequestParam("id") Long id) {
        productsService.delete(id);
        return ApiResponse.<ProductsDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<ProductsDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<ProductsDTO>builder()
                .result(productsService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<ProductsDTO>> getAll() {
        return ApiResponse.<List<ProductsDTO>>builder()
                .result(productsService.getAll())
                .code(200)
                .build();
    }

    @GetMapping("/sales")
    public ApiResponse<List<ProductsDTO>> getAllSales() {
        return ApiResponse.<List<ProductsDTO>>builder()
                .result(productsService.getProductSales())
                .code(200)
                .build();
    }

    @GetMapping("/populars/{top}")
    public ApiResponse<List<ProductsDTO>> getAllPopulars(@PathVariable("top") Integer top) {
        return ApiResponse.<List<ProductsDTO>>builder()
                .result(productsService.getProductsPopular(top))
                .code(200)
                .build();
    }
}
