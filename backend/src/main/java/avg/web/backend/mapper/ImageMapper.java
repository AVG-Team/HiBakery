package avg.web.backend.mapper;

import avg.web.backend.dto.ImageDTO;
import avg.web.backend.entities.Images;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ImageMapper extends EntityMapper<ImageDTO, Images> {
}
