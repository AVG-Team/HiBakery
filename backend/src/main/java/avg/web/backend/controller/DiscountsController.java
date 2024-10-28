package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.DiscountsDTO;
import avg.web.backend.service.DiscountsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/discounts")
@RequiredArgsConstructor
public class DiscountsController {

    private final DiscountsService discountsService;

    @PostMapping("")
    public ApiResponse<DiscountsDTO> create(DiscountsDTO request) {
        return ApiResponse.<DiscountsDTO>builder()
                .result(discountsService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<DiscountsDTO> update(@RequestParam Long id, @RequestBody DiscountsDTO request) {
        return ApiResponse.<DiscountsDTO>builder()
                .result(discountsService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<DiscountsDTO> delete(@RequestParam Long id) {
        discountsService.delete(id);
        return ApiResponse.<DiscountsDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<DiscountsDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<DiscountsDTO>builder()
                .result(discountsService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<DiscountsDTO>> getAll() {
        return ApiResponse.<List<DiscountsDTO>>builder()
                .result(discountsService.getAll())
                .code(200)
                .build();
    }
}
