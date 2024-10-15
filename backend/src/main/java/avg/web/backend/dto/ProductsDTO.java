package avg.web.backend.dto;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductsDTO {
    Long id;
    String title;
    String description;
    String code;
    Long categoryId;
}
