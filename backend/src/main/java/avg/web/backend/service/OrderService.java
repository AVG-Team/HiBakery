package avg.web.backend.service;

import avg.web.backend.entities.Orders;
import avg.web.backend.dto.request.OrderBillRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<Orders> getAllOrders();
    Optional<Orders> getOrderById(String id);
    Orders createOrder(OrderBillRequest orderRequest, MultipartFile imagePayment);
    Orders updateOrder(String id, Orders orders);
    void deleteOrder(String id);
}
