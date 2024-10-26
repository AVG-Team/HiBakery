package avg.web.backend.service;

import avg.web.backend.dto.BillsDTO;
import avg.web.backend.dto.ProductDetailDTO;
import avg.web.backend.entities.Bills;
import avg.web.backend.entities.ProductDetail;
import avg.web.backend.enums.ErrorCode;
import avg.web.backend.exception.AppException;
import avg.web.backend.mapper.BillMapper;
import avg.web.backend.repository.BillsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public final class BillService implements BaseService<BillsDTO,String> {

    private final BillsRepository repository;
    private final BillMapper mapper;

    @Override
    public BillsDTO create(BillsDTO DTO) {
        if(repository.existsById(DTO.getId())) {
            throw new AppException(ErrorCode.ENTITY_EXISTS);
        }
        Bills entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public BillsDTO getByID(String idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findById(idDTO).get());
    }

    @Override
    public List<BillsDTO> getAll() {
        if(repository.findAll().isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        return mapper.toDto(repository.findAll());
    }

    @Override
    public BillsDTO update(String idDTO, BillsDTO  DTO) {
        if(DTO == null || DTO.getId() == null) {
            throw new AppException(ErrorCode.INVALID_REQUEST);
        }
        if(idDTO == null) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        if(repository.findById(idDTO).isEmpty()) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        Bills entity = mapper.toEntity(DTO);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public void delete(String idDTO) {
        if(!repository.existsById(idDTO)) {
            throw new AppException(ErrorCode.NOT_FOUND);
        }
        repository.deleteById(idDTO);
    }


}

