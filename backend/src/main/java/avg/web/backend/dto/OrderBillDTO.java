package avg.web.backend.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;
//import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderBillDTO {
    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    String flatHouseNo;
    String address;
    String city;
    String district;
    String ward;
    String note;
    String discountCode;
    String deliveryTime;
    Integer paymentMethod;
//    private MultipartFile imagePayment;
    String categoryName;
    String imagePayment;
    Long total;
    List<OrderItemDTO> orderItems;
}

