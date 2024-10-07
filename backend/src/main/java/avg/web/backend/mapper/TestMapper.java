package avg.web.backend.mapper;

import avg.web.backend.dto.request.TestRequest;
import avg.web.backend.entities.Products;
import avg.web.backend.entities.Users;

public class TestMapper implements BaseMapper<TestRequest, Users> {


    @Override
    public Users toDto(TestRequest entity) {
        return null;
    }

    @Override
    public TestRequest toEntity(Products dto) {
        return null;
    }

    @Override
    public void updateEntityFromDto(Users dto, TestRequest entity) {

    }
}
