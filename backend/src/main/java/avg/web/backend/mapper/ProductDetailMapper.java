package avg.web.backend.mapper;

import avg.web.backend.dto.ProductDetailDTO;
import avg.web.backend.entities.ProductDetail;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductDetailMapper extends EntityMapper<ProductDetailDTO, ProductDetail> {
}
