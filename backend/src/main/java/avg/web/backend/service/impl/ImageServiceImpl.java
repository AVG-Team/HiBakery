package avg.web.backend.service.impl;

import avg.web.backend.entities.Bills;
import avg.web.backend.entities.Images;
import avg.web.backend.repository.BillsRepository;
import avg.web.backend.repository.ImagesRepository;
import avg.web.backend.service.BillService;
import avg.web.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImagesRepository imagesRepository;

    @Override
    public List<Images> getAllImages() {
        return imagesRepository.findAll();
    }

    @Override
    public Optional<Images> getImageById(String id) {
        return imagesRepository.findById(id);
    }

    @Override
    public Images createImage(Images images) {
        return imagesRepository.save(images);
    }

    @Override
    public Images updateImage(String id, Images images) {
        Optional<Images> imageDetail = imagesRepository.findById(id);
        if (imageDetail.isPresent()) {
            Images existingImage = imageDetail.get();
            existingImage.setName(images.getName());
            existingImage.setPath(images.getPath());
            existingImage.setAlt(images.getAlt());
            return imagesRepository.save(existingImage);
        }
        return null;
    }

    @Override
    public void deleteImage(String id) {
        imagesRepository.deleteById(id);
    }
}

