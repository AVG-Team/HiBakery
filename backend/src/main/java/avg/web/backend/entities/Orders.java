package avg.web.backend.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.sql.Timestamp;

@Data
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Orders extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    String userId;
    String name;
    String phone;
    String province;
    String district;
    String ward;
    String address;
    Timestamp deliveryTime;
    String note;
    String content;
    Long total;
    String code;
    Integer status;
    String billId;
    Long discountId;
}
