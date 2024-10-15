package avg.web.backend.service;

import avg.web.backend.entities.Bills;
import avg.web.backend.entities.OrderDetail;

import java.util.List;
import java.util.Optional;

public interface BillService {
    List<Bills> getAllBills();
    Optional<Bills> getBillById(String id);
    Bills createBill(Bills bill);
    Bills updateBill(String id, Bills bill);
    void deleteBill(String id);
}
