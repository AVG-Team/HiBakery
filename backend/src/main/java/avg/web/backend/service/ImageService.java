package avg.web.backend.service;

import avg.web.backend.entities.Images;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    List<Images> getAllImages();
    Optional<Images> getImageById(String id);
    Images createImage(Images images);
    Images updateImage(String id, Images images);
    void deleteImage(String id);
}
