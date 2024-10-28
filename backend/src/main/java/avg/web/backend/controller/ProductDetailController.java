package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.ProductDetailDTO;
import avg.web.backend.dto.ProductsDTO;
import avg.web.backend.service.ProductDetailService;
import jdk.jfr.Registered;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-detail")
@RequiredArgsConstructor
public class ProductDetailController {
    private final ProductDetailService productDetailService;

    @PostMapping("")
    public ApiResponse<ProductDetailDTO> create(ProductDetailDTO request) {
        return ApiResponse.<ProductDetailDTO>builder()
                .result(productDetailService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ProductDetailDTO> update(@RequestParam Long id, @RequestBody ProductDetailDTO request) {
        return ApiResponse.<ProductDetailDTO>builder()
                .result(productDetailService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<ProductDetailDTO> delete(@RequestParam Long id) {
        productDetailService.delete(id);
        return ApiResponse.<ProductDetailDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<ProductDetailDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<ProductDetailDTO>builder()
                .result(productDetailService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<ProductDetailDTO>> getAll() {
        return ApiResponse.<List<ProductDetailDTO>>builder()
                .result(productDetailService.getAll())
                .code(200)
                .build();
    }
}
