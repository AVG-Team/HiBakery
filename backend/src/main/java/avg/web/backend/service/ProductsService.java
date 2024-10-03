package avg.web.backend.service;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.exception.GlobalExceptionHandler;
import avg.web.backend.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductsService implements BaseService<ProductsRequest, ProductsResponse, Long> {

    private final ProductsRepository productsRepository;

    @Override
    public Optional<ProductsResponse> findById(Long id) {
        if(id == null){
            throw new AppException(ErrorCode.INVALID_ID);
        }
        if(productsRepository.findById(id).isEmpty()){
           throw new AppException(ErrorCode.NOT_FOUND);
        }

        return productsRepository.findById(id).map(ProductsResponse::new);
    }

    @Override
    public ProductsResponse create(ProductsRequest entity) {
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
