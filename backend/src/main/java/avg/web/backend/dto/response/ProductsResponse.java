package avg.web.backend.dto.response;

import avg.web.backend.entities.Products;
import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductsResponse {
    Long id;
    String title;
    String description;
    String code;
    Long categoryId;
}
