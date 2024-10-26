package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.ProductCategoryDTO;
import avg.web.backend.service.ProductCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-category")
@RequiredArgsConstructor
public class ProductCategoryController {

    private final ProductCategoryService productCategoryService;


    @PostMapping("")
    public ApiResponse<ProductCategoryDTO> create(ProductCategoryDTO request) {
        return ApiResponse.<ProductCategoryDTO>builder()
                .result(productCategoryService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ProductCategoryDTO> update(@RequestParam("id") Long id, @RequestBody ProductCategoryDTO request) {
        return ApiResponse.<ProductCategoryDTO>builder()
                .result(productCategoryService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<ProductCategoryDTO> delete(@RequestParam("id") Long id) {
        productCategoryService.delete(id);
        return ApiResponse.<ProductCategoryDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<ProductCategoryDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<ProductCategoryDTO>builder()
                .result(productCategoryService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<ProductCategoryDTO>> getAll() {
        return ApiResponse.<List<ProductCategoryDTO>>builder()
                .result(productCategoryService.getAll())
                .code(200)
                .build();
    }
    


}
