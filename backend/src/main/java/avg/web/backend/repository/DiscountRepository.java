package avg.web.backend.repository;

import avg.web.backend.entities.Discounts;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiscountRepository extends BaseRepository, JpaRepository<Discounts, Long> {
    Optional<Discounts> findByCode(String code);
}
