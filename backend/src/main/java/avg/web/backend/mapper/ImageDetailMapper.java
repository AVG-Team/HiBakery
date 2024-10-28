package avg.web.backend.mapper;

import avg.web.backend.dto.ImageDetailDTO;
import avg.web.backend.entities.ImageDetail;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ImageDetailMapper extends EntityMapper<ImageDetailDTO, ImageDetail> {
}
