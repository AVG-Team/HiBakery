package avg.web.backend.mapper;

import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.lang.reflect.Type;
/**
 * @author khainacs
 * @param <T>
 * @param <E>
 */
public class AbstractMapper<T, E> {
    protected final ModelMapper mapper;
    @Getter
    private Class<?> tClazz;
    @Getter
    private Class<?> uClazz;


    /**
     * Constructor AbstractMapper
     */
    public AbstractMapper() {
        // Tạo ModelMapper
        mapper = new ModelMapper();

        /** Then lấy cấu hình mapper set thành MatchingStrategies.STRICT
         * có nghĩa là cấu hình phải khớp chính xác
         * trong quá trình chuyển đổi DTO và Entity
         */
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
                .setPreferNestedProperties(false);
        //mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STANDARD);
    }

    /**
     * Constructor AbstractMapper
     * @param tClazz
     * @param uClazz
     */
    public AbstractMapper(Class<?> tClazz, Class<?> uClazz) {
        mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
                .setDeepCopyEnabled(false)
                .setPreferNestedProperties(false)
                .setSkipNullEnabled(true);
        //mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STANDARD);
        this.tClazz = tClazz;
        this.uClazz = uClazz;
    }

    /**
     * Convert DTO to entity
     * @param e
     * @return
     */
    public T convertDTOToEntity(E e) {
        return convertDTOToEntity(e, tClazz);
    }

    /**
     * Convert DTO to entity
     * @param e
     * @param tClazz
     * @return
     */
    private T convertDTOToEntity(E e, Class<?> tClazz) {
        if (null == e) return null;
        return mapper.map(e, (Type) tClazz);
    };

    /**
     * Convert entity to DTO
     * @param t
     * @return
     */
    public E convertEntityToDTO(T t) {
        return convertEntityToDTO(t, uClazz);
    }

    /**
     * Convert entity to DTO
     * @param t
     * @param uClazz
     * @return
     */
    private E convertEntityToDTO(T t, Class<?> uClazz) {
        if (null == t) return null;
        return mapper.map(t, (Type) uClazz);
    }

    /**
     * Update dto against entity.
     * @param e dto
     * @param oldEntity entity
     * @return updated entity
     */
    public T mapDTOToEntity(E e, T oldEntity) {
        if (null == e) return null;
        mapper.map(e, oldEntity);
        return oldEntity;
    };
    //end

    /**
     * Update dto against entity.
     * @param t Entity
     * @param e objectDto
     * @return objectDto
     */
    public E mapEntityToDTO(T t, E e) {
        mapper.map(t, e);
        return e;
    };
    //end
}
