package avg.web.backend.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ImageDetailDTO {
    Long id;
    Long productId;
    Long imageId;
}
