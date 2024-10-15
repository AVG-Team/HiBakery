package avg.web.backend.service.impl;

import avg.web.backend.entities.OrderDetail;
import avg.web.backend.repository.OrderDetailRepository;
import avg.web.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    public Optional<OrderDetail> getOrderDetailById(String id) {
        return orderDetailRepository.findById(id);
    }

    public OrderDetail createOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    public OrderDetail updateOrderDetail(String id, OrderDetail orderDetailDetails) {
        Optional<OrderDetail> orderDetail = orderDetailRepository.findById(id);
        if (orderDetail.isPresent()) {
            OrderDetail existingOrderDetail = orderDetail.get();
            existingOrderDetail.setPrice(orderDetailDetails.getPrice());
            existingOrderDetail.setOrderId(orderDetailDetails.getOrderId());
            existingOrderDetail.setProductId(orderDetailDetails.getProductId());
            existingOrderDetail.setQuantity(orderDetailDetails.getQuantity());
            return orderDetailRepository.save(existingOrderDetail);
        }
        return null;
    }

    public void deleteOrderDetail(String id) {
        orderDetailRepository.deleteById(id);
    }
}
