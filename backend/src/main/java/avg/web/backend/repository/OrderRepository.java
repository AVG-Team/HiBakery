package avg.web.backend.repository;

import avg.web.backend.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends BaseRepository, JpaRepository<Orders, String> {
}
