package avg.web.backend.service;

import avg.web.backend.dto.ImageDetailDTO;
import avg.web.backend.entities.ImageDetail;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.ImageDetailMapper;
import avg.web.backend.repository.ImageDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageDetailService implements  BaseService<ImageDetailDTO,Long> {

    private final ImageDetailRepository repository;
    private final ImageDetailMapper mapper;

    @Override
    public ImageDetailDTO create(ImageDetailDTO DTO) {
        if(repository.existsById(DTO.getId())) {
            throw new AppException(ErrorCode.ENTITY_EXISTS);
        }
        ImageDetail entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public ImageDetailDTO getByID(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<ImageDetailDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public ImageDetailDTO update(Long idDTO, ImageDetailDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(idDTO == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if(repository.findById(idDTO).isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        ImageDetail entity = mapper.toEntity(DTO);
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
