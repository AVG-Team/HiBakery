package avg.web.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bills extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @NotNull(message = "Category cannot be null")
    @Min(value = 1, message = "Category must be at least 1")
    Integer paymentMethod;

    @NotNull(message = "Amount cannot be null")
    @Min(value = 0, message = "Amount must be at least 0")
    Long amount;

    Boolean paymentStatus;

    @NotNull(message = "Image ID cannot be null")
    @Min(value = 1, message = "Image ID must be at least 1")
    Long imageId;

    @NotBlank(message = "Code cannot be blank")
    @Size(max = 50, message = "Code must be at most 50 characters")
    String discountCode;
}
