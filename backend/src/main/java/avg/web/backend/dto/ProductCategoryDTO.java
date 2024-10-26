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
public class ProductCategoryDTO {
    Long id;
    String name;
    String slug;
    Long parentId;
}
