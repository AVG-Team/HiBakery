package avg.web.backend.controller;

import avg.web.backend.entities.OrderDetail;
import avg.web.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order-details")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailService.getAllOrderDetails();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable String id) {
        return orderDetailService.getOrderDetailById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public OrderDetail createOrderDetail(@RequestBody OrderDetail orderDetail) {
        return orderDetailService.createOrderDetail(orderDetail);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable String id, @RequestBody OrderDetail orderDetailDetails) {
        OrderDetail updatedOrderDetail = orderDetailService.updateOrderDetail(id, orderDetailDetails);
        if (updatedOrderDetail == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedOrderDetail);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderDetail(@PathVariable String id) {
        orderDetailService.deleteOrderDetail(id);
        return ResponseEntity.ok().build();
    }
}

