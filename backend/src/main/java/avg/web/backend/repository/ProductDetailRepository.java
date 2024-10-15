package avg.web.backend.repository;

import avg.web.backend.entities.ProductDetail;
import avg.web.backend.entities.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductDetailRepository extends BaseRepository, JpaRepository<ProductDetail, String> {
    Optional<ProductDetail> findByProductId(Long productId);
}
