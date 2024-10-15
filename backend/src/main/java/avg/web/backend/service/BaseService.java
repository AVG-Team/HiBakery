package avg.web.backend.service;

import avg.web.backend.dto.ProductsDTO;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

/**
 *
 * @param <T> Request of the entity
 */

public interface BaseService<T, ID> {
    T create(T DTO);
    T getByID(ID idDTO);
    List<T> getAll();
    T update(ID id ,T DTO);
    void delete(ID idDTO);
}