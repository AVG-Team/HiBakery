package avg.web.backend.service;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

/**
 *
 * @param <T> Request of the entity.
 * @param <E> Response of the entity
 */

public interface BaseService<T, E> {
    E create(T DTO);
    <ID> E getByID(ID idDTO);
    List<E> getAll();
    E update(T DTO);
    <ID> void delete(ID idDTO);
}