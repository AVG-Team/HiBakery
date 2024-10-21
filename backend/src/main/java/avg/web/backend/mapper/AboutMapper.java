package avg.web.backend.mapper;

import avg.web.backend.dto.AboutDTO;
import avg.web.backend.entities.About;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AboutMapper extends EntityMapper<AboutDTO, About> {
}
