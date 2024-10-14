package avg.web.backend.mapper;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
public  class ProductsMapper extends AbstractMapper<Products, ProductsRequest> {
    public ProductsMapper() { super(Products.class, ProductsRequest.class); }
}

