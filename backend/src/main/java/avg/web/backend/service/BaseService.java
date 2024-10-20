package avg.web.backend.service;

import java.util.List;

/**
 *
 * @param <T> Request of the entity
 */

public interface BaseService<T, ID> {
    T create(T DTO);
    T getByID(ID idDTO);
    List<T> getAll();
    T update(ID idDTO, T DTO);
    void delete(ID idDTO);
}