package avg.web.backend.service.impl;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.ProductsMapper;
import avg.web.backend.repository.ProductsRepository;
import avg.web.backend.service.ProductService;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = lombok.AccessLevel.PRIVATE)
public class ProductsService extends AbstractBaseServiceImpl<ProductsRequest,ProductsResponse>
        implements ProductService {

    @Autowired
    ProductsMapper productsMapper;
    @Autowired
    private ProductsRepository productsRepository;

    public ProductsService(){
        super.setMapper(new ProductsMapper());
    }

    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(productsRepository);
    }
}