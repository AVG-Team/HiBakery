package avg.web.backend.service;

import avg.web.backend.dto.DiscountsDTO;
import avg.web.backend.dto.ProductDetailDTO;
import avg.web.backend.entities.Discounts;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.DiscountsMapper;
import avg.web.backend.repository.DiscountsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DiscountsService implements BaseService<DiscountsDTO,Long> {


    private final DiscountsRepository repository;
    private final DiscountsMapper mapper;

    @Override
    public DiscountsDTO create(DiscountsDTO DTO) {
        if(repository.existsById(DTO.getId())) {
            throw new AppException(ErrorCode.ENTITY_EXISTS);
        }
        Discounts entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public DiscountsDTO getByID(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<DiscountsDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public DiscountsDTO update(Long idDTO, DiscountsDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(idDTO == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if(repository.findById(idDTO).isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        Discounts entity = mapper.toEntity(DTO);
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


    public Optional<Discounts> getDiscountByCode(String code) {
        return repository.findByCode(code.trim().toUpperCase());
    }
}