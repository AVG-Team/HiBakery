package avg.web.backend.service;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.exception.GlobalExceptionHandler;
import avg.web.backend.mapper.ProductsMapper;
import avg.web.backend.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class ProductsService implements BaseService<ProductsRequest, ProductsResponse, Long> {
    @Autowired
    ProductsRepository productsRepository;
    ProductsMapper productsMapper;

    @Override
    public Optional<ProductsResponse> findById(Long id) {
        if(id == null){
            throw new AppException(ErrorCode.INVALID_ID);
        }
        if(productsRepository.findById(id).isEmpty()){
           throw new AppException(ErrorCode.NOT_FOUND);
        }



        return Optional.ofNullable(productsMapper.toDto(productsMapper.toEntity(productsRepository.findById(id).get())));
    }

    @Override
    public ProductsResponse create(ProductsRequest entity) {
        if(entity == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        return null;
    }

    @Override
    public ProductsResponse update(Long id, ProductsRequest entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
