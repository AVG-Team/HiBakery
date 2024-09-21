package avg.web.backend.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bills  extends  BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    Integer category;
    Long amount;
    Integer imageId;
}
