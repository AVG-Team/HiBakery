package avg.web.backend.constant;

public class Constants {
    public interface GRADE_STATUS {
        public final Integer ACTIVE = 1;
        public final Integer TEMPORARY_LOCK = 2;
        public final Integer DEACTIVE = 3;
    }

    public interface TOPIC_STATUS {
        public final Integer ACTIVE = 1;
        public final Integer TEMPORARY_LOCK = 2;
        public final Integer DEACTIVE = 3;
        public final Integer DELETED = 255;
    }
    // Regex for acceptable logins
    public static final String LOGIN_REGEX = "^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$";

    public static final String SYSTEM = "system";
    public static final String DEFAULT_LANGUAGE = "en";

}
