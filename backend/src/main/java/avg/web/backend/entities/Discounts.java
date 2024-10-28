package avg.web.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.sql.Timestamp;

@Data
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Discounts extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotBlank(message = "Name cannot be blank")
    @Size(max = 255, message = "Name must be at most 255 characters")
    String name;

    @NotBlank(message = "Code cannot be blank")
    @Size(max = 50, message = "Code must be at most 50 characters")
    String code;

    @NotNull(message = "Percent cannot be null")
    @Min(value = 0, message = "Percent must be at least 0")
    @Max(value = 100, message = "Percent must be at most 100")
    Integer percent;

    @NotNull(message = "Start time cannot be null")
    @Column(name = "start_date")
    Timestamp start;

    @NotNull(message = "End time cannot be null")
    @Future(message = "End time must be in the future")
    @Column(name = "end_date")
    Timestamp end;

    @NotNull(message = "Active status cannot be null")
    Boolean active;
}
