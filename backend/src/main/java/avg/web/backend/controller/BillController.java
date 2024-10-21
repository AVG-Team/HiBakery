package avg.web.backend.controller;

import avg.web.backend.dto.ApiResponse;
import avg.web.backend.dto.BillsDTO;
import avg.web.backend.service.BillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Bills")
@RequiredArgsConstructor
public class BillController {
    private final BillService billService;

    @PostMapping("")
    public ApiResponse<BillsDTO> create(BillsDTO request) {
        return ApiResponse.<BillsDTO>builder()
                .result(billService.create(request))
                .code(200)
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<BillsDTO> update(@RequestParam String id, @RequestBody BillsDTO request) {
        return ApiResponse.<BillsDTO>builder()
                .result(billService.update(id,request))
                .code(200)
                .build();
    }

    @DeleteMapping("")
    public ApiResponse<BillsDTO> delete(@RequestParam String id) {
        billService.delete(id);
        return ApiResponse.<BillsDTO>builder()
                .code(200)
                .build();
    }


    @GetMapping("/{id}")
    public ApiResponse<BillsDTO> get(@PathVariable("id") String id) {
        return ApiResponse.<BillsDTO>builder()
                .result(billService.getByID(id))
                .code(200)
                .build();
    }

    @GetMapping("")
    public ApiResponse<List<BillsDTO>> getAll() {
        return ApiResponse.<List<BillsDTO>>builder()
                .result(billService.getAll())
                .code(200)
                .build();
    }
}
