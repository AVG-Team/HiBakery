package avg.web.backend.mapper;

import avg.web.backend.dto.ProductCategoryDTO;
import avg.web.backend.entities.ProductCategory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductCategoryMapper extends EntityMapper<ProductCategoryDTO, ProductCategory> {
}
