package avg.web.backend.service;

import avg.web.backend.dto.*;
import avg.web.backend.entities.*;
import avg.web.backend.mapper.BillMapper;
import avg.web.backend.mapper.ImageMapper;
import avg.web.backend.repository.OrderRepository;
import avg.web.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    private final UserRepository userRepository;

    private final BillService billService;

    private final ProductsService productService;


    private final ProductDetailService productDetailService;


    private final OrderDetailService orderDetailService;


    private final DiscountsService discountService;


    private final FileService fileService;


    private final ImageService imageService;

    private final BillMapper billMapper;

    private final ImageMapper imageMapper;


    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }


    public Optional<Orders> getOrderById(String id) {
        return orderRepository.findById(id);
    }


    public Orders createOrder(OrderBillDTO orderRequest, MultipartFile imagePayment) {
//        try {
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
//        } catch (Exception e) {
//            System.out.println("Error: " + e.getMessage());
//            return null;
//        }
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
            ProductsDTO product = productService.getByID(item.getProductId());
            if (product != null) {
                Optional<ProductDetailDTO> productDetail = productDetailService.getProductDetailByProductId(product.getId());
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

        String fileName = fileService.saveFileStatic(file, "bills");
        System.out.println(fileName);
        if (fileName == null) {
            return null;
        }

        Images image = new Images();
        image.setAlt("Bill");
        image.setName(fileName);
        image.setPath("bills/" + fileName);

        ImageDTO imageDTO = imageMapper.toDto(image);

        return imageMapper.toEntity(imageService.create(imageDTO));
    }

    private Orders createOrder(OrderBillDTO orderRequest, String billId, Long total, Long discountId) {
        Orders order = new Orders();
        User user = userRepository.findUserByEmail(orderRequest.getEmail());
        Long userId = user.getId();
        order.setUserId(userId);
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
        BillsDTO billsDTO = billMapper.toDto(bill);
        return billMapper.toEntity(billService.create(billsDTO));
    }


    private void createOrderDetail(List<OrderItemDTO> orderListItemDTO, String orderId) {
        for (OrderItemDTO item : orderListItemDTO) {
            ProductsDTO product = productService.getByID(item.getProductId());
            if (product != null) {
                Optional<ProductDetailDTO> productDetail = productDetailService.getProductDetailByProductId(product.getId());
                if (productDetail.isPresent()) {
                    OrderDetail orderDetail = new OrderDetail();
                    orderDetail.setOrderId(orderId);
                    orderDetail.setProductId(product.getId());
                    orderDetail.setQuantity(item.getQuantity());
                    orderDetail.setPrice(productDetail.get().getPrice());
                    orderDetailService.createOrderDetail(orderDetail);
                }
            }
        }
    }


    public Orders updateOrder(String id, Orders orderDetails) {
        return null;
    }


    public void deleteOrder(String id) {

    }
}
