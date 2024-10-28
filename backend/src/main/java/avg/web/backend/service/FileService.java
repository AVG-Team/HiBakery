package avg.web.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {
    public final static String fileSystemStatic = System.getProperty("user.dir") + File.separator
            + "src" + File.separator + "main" + File.separator + "resources" + File.separator + "static" + File.separator;

    public String getFileExtension(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            return "";
        }
        int dotIndex = fileName.lastIndexOf('.');
        return (dotIndex == -1) ? "" : fileName.substring(dotIndex + 1);
    }

    public String saveFileStatic(MultipartFile file, String folderName) {
        String folderPath = fileSystemStatic + folderName;
        System.out.println("Folder path: " + folderPath);

        try {
            // Kiểm tra và tạo thư mục nếu chưa tồn tại
            Path folderDir = Paths.get(folderPath);
            if (!Files.exists(folderDir)) {
                Files.createDirectories(folderDir);  // Tạo thư mục và các thư mục cha nếu cần
            }

            // Đọc nội dung file và tạo tên file mới
            byte[] bytes = file.getBytes();
            String fileName = System.currentTimeMillis() + "." + getFileExtension(file.getOriginalFilename());
            Path filePath = folderDir.resolve(fileName); // Đường dẫn đầy đủ của tệp

            System.out.println("File path: " + filePath);

            // Ghi file vào hệ thống
            Files.write(filePath, bytes);

            return fileName; // Trả về tên file nếu thành công
        } catch (IOException ex) {
            System.out.println("Error: " + ex.getMessage());
            return null; // Trả về null nếu có lỗi
        }
    }

}
