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
public class ProductsDTO {
    Long id;
    String title;
    String description;
    String code;
    Long categoryId;
}
