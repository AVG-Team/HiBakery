package avg.web.backend.controller;

import avg.web.backend.entities.Images;
import avg.web.backend.entities.Orders;
import avg.web.backend.dto.request.OrderBillRequest;
import avg.web.backend.service.ImageService;
import avg.web.backend.service.OrderService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ImageService imageService;


    @GetMapping
    public List<Orders> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable String id) {
        return orderService.getOrderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestPart("orderData") String orderDataJson,
                                         @RequestPart(value = "imagePayment", required = false) MultipartFile imagePayment
    ) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            OrderBillRequest orderRequest = objectMapper.readValue(orderDataJson, OrderBillRequest.class);

            // Xử lý hình ảnh thanh toán
//            Long imgId = processPaymentImage(imagePayment);

            // Tạo hóa đơn
            System.out.println(imagePayment);
            System.out.println(orderRequest.getDeliveryTime());
            // Tạo đơn hàng
            Orders order = orderService.createOrder(orderRequest, imagePayment);

            // Tạo chi tiết đơn hàng


            return ResponseEntity.ok(order);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Lỗi khi tạo đơn hàng: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable String id, @RequestBody Orders orderDetails) {
        Orders updatedOrder = orderService.updateOrder(id, orderDetails);
        if (updatedOrder == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable String id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().build();
    }
}