package avg.web.backend.service.impl;

import avg.web.backend.mapper.AbstractMapper;
import avg.web.backend.service.BaseService;
import lombok.Setter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public abstract class AbstractBaseServiceImpl<T, E> implements BaseService<T, E> {
    @Setter
    public static Object repository;

    @Setter
    public AbstractMapper mapper;

    public abstract void setRepository();

    public <T, ID> JpaRepository<T, ID> getRepositry() {
        return (JpaRepository<T, ID>) this.repository;
    }


    @Override
    public E create(T DTO) {
        setRepository();
        Object existingEntity = mapper.convertDTOToEntity(DTO);
        return (E) mapper.convertEntityToDTO(getRepositry().save(existingEntity));
    }

    @Override
    public <ID> E getByID(ID idDTO) {
        setRepository();
        return (E) mapper.convertEntityToDTO(getRepositry().findById(idDTO));
    }

    @Override
    public List<E> getAll() {
        setRepository();
        List<T> entities = (List<T>) getRepositry().findAll();
        return (List<E>) entities.stream().map((entity) -> mapper.convertEntityToDTO(entity)).toList();
    }

    @Override
    public E update(T DTO) {
        setRepository();
        Object entity = mapper.convertDTOToEntity(DTO);
        return (E) mapper.convertEntityToDTO(getRepositry().save(entity));
    }

    @Override
    public <ID> void delete(ID idDTO) {
        setRepository();
        getRepositry().deleteById(idDTO);
    }
}