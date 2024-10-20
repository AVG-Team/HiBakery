package avg.web.backend.service;

import avg.web.backend.entities.OrderDetail;
import avg.web.backend.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface OrderDetailService {
    List<OrderDetail> getAllOrderDetails();

    Optional<OrderDetail> getOrderDetailById(String id);

    OrderDetail createOrderDetail(OrderDetail orderDetail);

    OrderDetail updateOrderDetail(String id, OrderDetail orderDetailDetails);

    void deleteOrderDetail(String id);
}
