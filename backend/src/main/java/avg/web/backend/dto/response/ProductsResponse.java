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

    public ProductsResponse(Products products) {
        this.id = products.getId();
        this.title = products.getTitle();
        this.description = products.getDescription();
        this.code = products.getCode();
        this.categoryId = products.getCategoryId();
    }
}
