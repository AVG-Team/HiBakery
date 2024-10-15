package avg.web.backend.mapper;

import avg.web.backend.dto.ProductsDTO;
import avg.web.backend.entities.Products;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Mapper(componentModel = "spring")
public  interface ProductsMapper extends EntityMapper<ProductsDTO, Products> {
}

