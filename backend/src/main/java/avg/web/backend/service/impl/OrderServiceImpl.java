package avg.web.backend.service.impl;

import avg.web.backend.dto.request.OrderItemDTO;
import avg.web.backend.entities.*;
import avg.web.backend.repository.OrderRepository;
import avg.web.backend.dto.request.OrderBillRequest;
import avg.web.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BillService billService;

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductDetailService productDetailService;

    @Autowired
    private OrderDetailService orderDetailService;

    @Autowired
    private DiscountService discountService;

    @Autowired
    private FileService fileService;

    @Autowired
    private ImageService imageService;

    @Override
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Orders> getOrderById(String id) {
        return orderRepository.findById(id);
    }

    @Override
    public Orders createOrder(OrderBillRequest orderRequest, MultipartFile imagePayment) {
        try {
            System.out.println("Order " + orderRequest);
            Discounts discount = getDiscountCode(orderRequest.getDiscountCode());
            String discountCode = "";
            Integer discountValue = 0;
            Long discountId = null;
            if (discount != null) {
                discountValue = discount.getPercent();
                discountCode = discount.getCode();
                discountId = discount.getId();
            }

            Long total = getTotal(orderRequest.getOrderItems(), discountValue);

            Long imageId = null;
            if (!imagePayment.isEmpty()) {
                Images image = updateImage(imagePayment);
                if (image != null) {
                    imageId = image.getId();
                }
            }
            Bills bill = createBill(total, imageId, orderRequest.getPaymentMethod(), true, discountCode);
            Orders order = createOrder(orderRequest, bill.getId(), total, discountId);
            createOrderDetail(orderRequest.getOrderItems(), order.getId());
            return order;
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    private Discounts getDiscountCode(String code) {
        Optional<Discounts> discount = discountService.getDiscountByCode(code);
        if (discount.isPresent()) {
            if (discount.get().getActive()
                    && discount.get().getStart().before(Timestamp.valueOf(LocalDateTime.now()))
                    && discount.get().getEnd().after(Timestamp.valueOf(LocalDateTime.now()))) {
                return discount.get();
            }
        }

        return null;
    }

    private Long getTotal(List<OrderItemDTO> orderListItemDTO, int discount) {
        long total = 0L;
        for (OrderItemDTO item : orderListItemDTO) {
            Optional<Products> product = productService.getProductById(item.getProductId());
            if (product.isPresent()) {
                Optional<ProductDetail> productDetail = productDetailService.getProductDetailByProductId(product.get().getId());
                if (productDetail.isPresent()) {
                    total += productDetail.get().getPrice() * item.getQuantity();
                }
            }
        }

        if (discount > 0) {
            total = total - (total * discount / 100);
        }
        return total;
    }

    public Images updateImage(MultipartFile file) {
        if (file.isEmpty()) {
            return null;
        }

        String fileName = fileService.savaFileStatic(file, "bills");
        if (fileName != null) {
            return null;
        }

        Images image = new Images();
        image.setAlt("Bill");
        image.setName(fileName);
        image.setPath("bills/" + fileName);
        return imageService.createImage(image);
    }

    private Orders createOrder(OrderBillRequest orderRequest, String billId, Long total, Long discountId) {
        Orders order = new Orders();
        order.setUserId("1");
        order.setName(orderRequest.getFirstName() + " " + orderRequest.getLastName());
        order.setPhone(orderRequest.getPhoneNumber());
        order.setProvince(orderRequest.getCity());
        order.setDistrict(orderRequest.getDistrict());
        order.setWard(orderRequest.getWard());
        String address = "";
        if (!orderRequest.getFlatHouseNo().isEmpty()) {
            address += orderRequest.getFlatHouseNo() + ", ";
        }
        order.setAddress(address + orderRequest.getAddress());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        LocalDateTime localDateTime = LocalDateTime.parse(orderRequest.getDeliveryTime(), formatter);
        Timestamp deliveryTimestamp = Timestamp.valueOf(localDateTime);
        order.setDeliveryTime(deliveryTimestamp);

        order.setNote(orderRequest.getNote());
        order.setContent(orderRequest.getNote());
        order.setTotal(total);
        order.setCode("ORDER-" + System.currentTimeMillis());
        order.setStatus(1);
        order.setDiscountId(discountId);
        order.setBillId(billId);
        return orderRepository.save(order);
    }

    private Bills createBill(Long total, Long imgId, Integer paymentMethod, Boolean statusPayment, String discountCode) {
        Bills bill = new Bills();
        bill.setAmount(total);
        bill.setPaymentMethod(paymentMethod);
        bill.setImageId(imgId);
        bill.setPaymentStatus(statusPayment);
        bill.setDiscountCode(discountCode);
        return billService.createBill(bill);
    }


    private void createOrderDetail(List<OrderItemDTO> orderListItemDTO, String orderId) {
        for (OrderItemDTO item : orderListItemDTO) {
            Optional<Products> product = productService.getProductById(item.getProductId());
            if (product.isPresent()) {
                Optional<ProductDetail> productDetail = productDetailService.getProductDetailByProductId(product.get().getId());
                if (productDetail.isPresent()) {
                    OrderDetail orderDetail = new OrderDetail();
                    orderDetail.setOrderId(orderId);
                    orderDetail.setProductId(product.get().getId());
                    orderDetail.setQuantity(item.getQuantity());
                    orderDetail.setPrice(productDetail.get().getPrice());
                    orderDetailService.createOrderDetail(orderDetail);
                }
            }
        }
    }

    @Override
    public Orders updateOrder(String id, Orders orderDetails) {
        return null;
    }

    @Override
    public void deleteOrder(String id) {

    }
}
