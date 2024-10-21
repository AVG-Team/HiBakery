package avg.web.backend.mapper;

import avg.web.backend.dto.SettingsDTO;
import avg.web.backend.entities.Settings;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SettingsMapper extends EntityMapper<SettingsDTO, Settings> {
}
