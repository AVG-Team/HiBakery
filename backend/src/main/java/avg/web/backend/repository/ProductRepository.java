package avg.web.backend.repository;

import avg.web.backend.entities.Orders;
import avg.web.backend.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends BaseRepository, JpaRepository<Products, Long> {
}
