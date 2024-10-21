package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.SettingsDTO;
import avg.web.backend.service.SettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings")
@RequiredArgsConstructor
public class SettingsController {
    
    private final SettingsService settingsService;


    @PostMapping("")
    public ApiResponse<SettingsDTO> create(SettingsDTO request) {
        return ApiResponse.<SettingsDTO>builder()
                .result(settingsService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<SettingsDTO> update(@RequestParam Long id, @RequestBody SettingsDTO request) {
        return ApiResponse.<SettingsDTO>builder()
                .result(settingsService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<SettingsDTO> delete(@RequestParam Long id) {
        settingsService.delete(id);
        return ApiResponse.<SettingsDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<SettingsDTO> get(@PathVariable("id") Long id) {
        return ApiResponse.<SettingsDTO>builder()
                .result(settingsService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<SettingsDTO>> getAll() {
        return ApiResponse.<List<SettingsDTO>>builder()
                .result(settingsService.getAll())
                .code(200)
                .build();
    }
}
