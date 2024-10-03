package avg.web.backend.dto.request;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    Long id;
    String title;
    String description;
    String code;
    Long categoryId;
}
