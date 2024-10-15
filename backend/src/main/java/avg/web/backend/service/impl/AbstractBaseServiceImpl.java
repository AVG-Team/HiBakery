
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