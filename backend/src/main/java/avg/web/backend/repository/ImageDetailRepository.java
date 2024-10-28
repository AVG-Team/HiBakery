package avg.web.backend.repository;

import avg.web.backend.entities.ImageDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageDetailRepository extends JpaRepository<ImageDetail,Long> {
}
