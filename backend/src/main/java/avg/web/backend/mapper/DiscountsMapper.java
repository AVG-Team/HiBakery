package avg.web.backend.mapper;

import avg.web.backend.dto.DiscountsDTO;
import avg.web.backend.entities.Discounts;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DiscountsMapper extends EntityMapper<DiscountsDTO, Discounts> {
}
