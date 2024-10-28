package avg.web.backend.mapper;

import avg.web.backend.dto.BillsDTO;
import avg.web.backend.entities.Bills;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BillMapper extends EntityMapper<BillsDTO, Bills> {
}
