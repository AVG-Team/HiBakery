package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.ImageDetailDTO;
import avg.web.backend.service.ImageDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/image_detail")
@RequiredArgsConstructor
public class ImageDetailController {

    private final ImageDetailService imageDetailService;

    @PostMapping("")
    public ApiResponse<ImageDetailDTO> create(ImageDetailDTO request) {
        return ApiResponse.<ImageDetailDTO>builder()
                .result(imageDetailService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ImageDetailDTO> update(@RequestParam Long id, @RequestBody ImageDetailDTO request) {
        return ApiResponse.<ImageDetailDTO>builder()
                .result(imageDetailService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<ImageDetailDTO> delete(@RequestParam Long id) {
        imageDetailService.delete(id);
        return ApiResponse.<ImageDetailDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<ImageDetailDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<ImageDetailDTO>builder()
                .result(imageDetailService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<ImageDetailDTO>> getAll() {
        return ApiResponse.<List<ImageDetailDTO>>builder()
                .result(imageDetailService.getAll())
                .code(200)
                .build();
    }
}
