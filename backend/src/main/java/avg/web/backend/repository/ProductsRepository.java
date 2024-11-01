package avg.web.backend.repository;

import avg.web.backend.entities.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

    @Query("SELECT p FROM Products p ORDER BY p.id ASC ")
    List<Products> getProductsTopK(@Param("k") int k, Pageable pageable);

    @Query("SELECT p " +
            "FROM Products  p " +
            "WHERE ( :categoryId IS NULL or p.categoryId = :categoryId) ")
    List<Products> getProductsByCategoryId(@Param("categoryId") Long categoryId);

    @Query("SELECT p " +
            "FROM Products p " +
            "JOIN ProductDetail  pd on p.id = pd.productId " +
            "ORDER BY pd.price ASC ")
    List<Products> sortProductsByPriceAsc();


    @Query("SELECT p " +
            "FROM Products p " +
            "JOIN ProductDetail  pd on p.id = pd.productId " +
            "ORDER BY pd.price DESC ")
    List<Products> sortProductsByPriceDesc();


}
