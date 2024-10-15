package avg.web.backend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderBillRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String flatHouseNo;
    private String address;
    private String city;
    private String district;
    private String ward;
    private String note;
    private String discountCode;
    private String deliveryTime;
    private Integer paymentMethod;
//    private MultipartFile imagePayment;
    private String categoryName;
    private String imagePayment;
    private List<OrderItemDTO> orderItems;
}

