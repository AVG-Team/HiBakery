package avg.web.backend.service;

import avg.web.backend.dto.SettingsDTO;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.entities.Products;
import avg.web.backend.entities.Settings;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.SettingsMapper;
import avg.web.backend.repository.SettingsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SettingsService implements BaseService<SettingsDTO,Long> {

    private final SettingsRepository repository;
    private final SettingsMapper mapper;

    @Override
    public SettingsDTO create(SettingsDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        Settings settings = mapper.toEntity(DTO);
        settings = repository.save(settings);

        return mapper.toDto(settings);
    }

    @Override
    public SettingsDTO getByID(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<SettingsDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public SettingsDTO update(Long idDTO, SettingsDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(idDTO == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if(repository.findById(idDTO).isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        Settings entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public void delete(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        repository.deleteById(idDTO);
    }
}
