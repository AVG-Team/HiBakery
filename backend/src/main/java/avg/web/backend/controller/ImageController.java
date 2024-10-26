package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.ImageDTO;
import avg.web.backend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/image")
@RequiredArgsConstructor
public class ImageController  {
    
    private final ImageService imageService;

    @PostMapping("")
    public ApiResponse<ImageDTO> create(ImageDTO request) {
        return ApiResponse.<ImageDTO>builder()
                .result(imageService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<ImageDTO> update(@RequestParam Long id, @RequestBody ImageDTO request) {
        return ApiResponse.<ImageDTO>builder()
                .result(imageService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<ImageDTO> delete(@RequestParam Long id) {
        imageService.delete(id);
        return ApiResponse.<ImageDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<ImageDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<ImageDTO>builder()
                .result(imageService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<ImageDTO>> getAll() {
        return ApiResponse.<List<ImageDTO>>builder()
                .result(imageService.getAll())
                .code(200)
                .build();
    }
}
