package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.AboutDTO;
import avg.web.backend.service.AboutService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/about")
@RequiredArgsConstructor
public class AboutController {
    private final AboutService aboutService;

    @PostMapping("")
    public ApiResponse<AboutDTO> create(AboutDTO request) {
        return ApiResponse.<AboutDTO>builder()
                .result(aboutService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<AboutDTO> update(@RequestParam Long id, @RequestBody AboutDTO request) {
        return ApiResponse.<AboutDTO>builder()
                .result(aboutService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<AboutDTO> delete(@RequestParam Long id) {
        aboutService.delete(id);
        return ApiResponse.<AboutDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<AboutDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<AboutDTO>builder()
                .result(aboutService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<AboutDTO>> getAll() {
        return ApiResponse.<List<AboutDTO>>builder()
                .result(aboutService.getAll())
                .code(200)
                .build();
    }
    
}
