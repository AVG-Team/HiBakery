package avg.web.backend.service;

import avg.web.backend.dto.ProductCategoryDTO;
import avg.web.backend.entities.ProductCategory;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.ProductCategoryMapper;
import avg.web.backend.repository.ProductCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductCategoryService implements BaseService<ProductCategoryDTO, Long> {

    private final ProductCategoryRepository repository;
    private final ProductCategoryMapper mapper;

    @Override
    public ProductCategoryDTO create(ProductCategoryDTO DTO) {
        if(repository.existsById(DTO.getId())) {
            throw new AppException(ErrorCode.ENTITY_EXISTS);
        }
        ProductCategory entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public ProductCategoryDTO getByID(Long idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<ProductCategoryDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public ProductCategoryDTO update(Long idDTO, ProductCategoryDTO DTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if( idDTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        ProductCategory category = mapper.toEntity(DTO);
        repository.save(category);
        return mapper.toDto(category);
    }

    @Override
    public void delete(Long idDTO) {
        if(idDTO == null || !repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        repository.deleteById(idDTO);
    }
}
