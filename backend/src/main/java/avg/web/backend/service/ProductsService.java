package avg.web.backend.service;

import avg.web.backend.dto.ProductsDTO;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.ProductsMapper;
import avg.web.backend.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class ProductsService implements BaseService<ProductsDTO,Long> {

    @Autowired
    private ProductsRepository productsRepository;
    @Autowired
    private ProductsMapper productsMapper;


    @Override
    public ProductsDTO create(ProductsDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        Products product = productsMapper.toEntity(DTO);
        product = productsRepository.save(product);

        return productsMapper.toDto(product);
    }

    @Override
    public ProductsDTO getByID(Long idDTO) {
        if(idDTO == null){
            throw new AppException(ErrorCode.INVALID_ID);
        }
        if(productsRepository.findById(idDTO).isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        Products productsResponse = productsRepository.findById(idDTO).get();
        return productsMapper.toDto(productsResponse);
    }

    @Override
    public List<ProductsDTO> getAll() {
        if(productsRepository.findAll().isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        List<Products> productsResponse = productsRepository.findAll();
        return productsMapper.toDto(productsResponse);
    }

    @Override
    public ProductsDTO update(Long id, ProductsDTO DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(productsRepository.findById(id).isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        productsRepository.save(productsMapper.toEntity(DTO));
        if(DTO.getId() == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return productsMapper.toDto(productsRepository.findById(id).get());
    }

    @Override
    public void delete(Long idDTO) {
        if(idDTO == null){
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(productsRepository.findById(idDTO).isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }productsRepository.deleteById(idDTO);
    }
}