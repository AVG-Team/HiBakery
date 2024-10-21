package avg.web.backend.service;

import avg.web.backend.dto.AboutDTO;
import avg.web.backend.entities.About;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.AboutMapper;
import avg.web.backend.repository.AboutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AboutService implements  BaseService<AboutDTO,Long> {

    private final AboutRepository repository;
    private final AboutMapper mapper;

    @Override
    public AboutDTO create(AboutDTO DTO) {
        if(repository.existsById(DTO.getId())) {
            throw new AppException(ErrorCode.ENTITY_EXISTS);
        }
        About entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public AboutDTO getByID(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<AboutDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public AboutDTO update(Long idDTO, AboutDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(idDTO == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if(repository.findById(idDTO).isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        About entity = mapper.toEntity(DTO);
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
