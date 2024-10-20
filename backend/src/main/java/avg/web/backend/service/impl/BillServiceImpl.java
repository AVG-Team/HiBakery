package avg.web.backend.service.impl;

import avg.web.backend.entities.Bills;
import avg.web.backend.repository.BillsRepository;
import avg.web.backend.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillsRepository billsRepository;

    @Override
    public List<Bills> getAllBills() {
        return billsRepository.findAll();
    }

    @Override
    public Optional<Bills> getBillById(String id) {
        return billsRepository.findById(id);
    }

    @Override
    public Bills createBill(Bills bill) {
        return billsRepository.save(bill);
    }

    @Override
    public Bills updateBill(String id, Bills bill) {
        Optional<Bills> billDetail = billsRepository.findById(id);
        if (billDetail.isPresent()) {
            Bills existingBill = billDetail.get();
            existingBill.setAmount(bill.getAmount());
            existingBill.setPaymentMethod(bill.getPaymentMethod());
            existingBill.setPaymentStatus(bill.getPaymentStatus());
            existingBill.setImageId(bill.getImageId());
            return billsRepository.save(existingBill);
        }
        return null;
    }

    @Override
    public void deleteBill(String id) {
        billsRepository.deleteById(id);
    }
}

