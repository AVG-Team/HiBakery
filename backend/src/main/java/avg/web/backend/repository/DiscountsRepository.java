package avg.web.backend.repository;

import avg.web.backend.entities.Discounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiscountsRepository extends JpaRepository<Discounts, Long> {
    Optional<Discounts> findByCode(String code);
}
