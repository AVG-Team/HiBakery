package avg.web.backend.repository;

import avg.web.backend.entities.Bills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillsRepository extends JpaRepository<Bills, String> {
}
