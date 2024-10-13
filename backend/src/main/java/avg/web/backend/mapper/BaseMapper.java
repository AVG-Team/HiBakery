package avg.web.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

/**
 * BaseMapper provides generic mapping methods for entities, request DTOs, and response DTOs.
 *
 * @param <E> Type of the entity.
 * @param <Q> Type of the Request DTO.
 * @param <R> Type of the Response DTO.
 */
@Mapper(componentModel = "spring")
public interface BaseMapper<E, Q, R> {

    /**
     * Converts entity to response DTO.
     *
     * @param entity the entity to convert.
     * @return the converted response DTO.
     */
    R toResponse(E entity);

    /**
     * Converts request DTO to entity.
     *
     * @param request the request DTO to convert.
     * @return the converted entity.
     */
    E toEntity(Q request);

    /**
     * Updates the entity with values from the request DTO.
     *
     * @param request the request DTO with new values.
     * @param entity the entity to update.
     */
    void updateEntityFromRequest(Q request, @MappingTarget E entity);

    /**
     * Converts a list of entities to a list of response DTOs.
     *
     * @param entities the list of entities to convert.
     * @return the list of converted response DTOs.
     */
    List<R> toResponseList(List<E> entities);

    /**
     * Converts a list of request DTOs to a list of entities.
     *
     * @param requests the list of request DTOs to convert.
     * @return the list of converted entities.
     */
    List<E> toEntityList(List<Q> requests);
}