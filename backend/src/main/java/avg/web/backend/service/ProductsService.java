package avg.web.backend.service;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.ProductsMapper;
import avg.web.backend.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class ProductsService implements BaseService<ProductsRequest, ProductsResponse, Long> {

    ProductsRepository productsRepository;
    ProductsMapper productsMapper;


    @Override
    public ProductsResponse findAll() {
        List<Products> products = productsRepository.findAll();

        if (products.isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }

        return (ProductsResponse) products.stream()
                .map(productsMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<ProductsResponse> findById(Long id) {
        if(id == null){
            throw new AppException(ErrorCode.INVALID_ID);
        }
        if(productsRepository.findById(id).isEmpty()){
           throw new AppException(ErrorCode.NOT_FOUND);
        }
        Optional<Products> productsResponse = productsRepository.findById(id);
        return productsResponse.map(productsMapper::toResponse);
    }

    @Override
    public ProductsResponse create(ProductsRequest entity) {
        if(entity == null || entity.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        productsRepository.save(productsMapper.toEntity(entity));
        if(entity.getId() == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return productsMapper.toResponse(productsRepository.findById(entity.getId()).get());
    }

    @Override
    public ProductsResponse update(Long id, ProductsRequest entity) {
        if(entity == null || entity.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(productsRepository.findById(id).isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }

        productsRepository.save(productsMapper.toEntity(entity));
        if(entity.getId() == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return productsMapper.toResponse(productsRepository.findById(entity.getId()).get()) ;
    }

    @Override
    public void delete(Long id) {
        if(id == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(productsRepository.findById(id).isEmpty()){
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        productsRepository.deleteById(id);
    }
}
