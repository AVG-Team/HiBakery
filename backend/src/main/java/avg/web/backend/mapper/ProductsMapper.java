package avg.web.backend.mapper;

import avg.web.backend.dto.request.ProductsRequest;
import avg.web.backend.dto.response.ProductsResponse;
import avg.web.backend.entities.Products;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public  interface ProductsMapper extends BaseMapper<Products,ProductsRequest, ProductsResponse> {
}
