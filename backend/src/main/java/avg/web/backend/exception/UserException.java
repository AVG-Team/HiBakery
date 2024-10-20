package avg.web.backend.exception;

public class UserException extends Exception {
    private String code;

    public UserException(ErrorCode code, final String message) {
        super(message);
        this.code = code.getCode();
    }

    public UserException(ErrorCode code, final String message, final Throwable cause) {
        super(message, cause);
        this.code = code.getCode();
    }

    public static UserException newInstance(ErrorMessageResource errorMessageResource, ErrorCode code,
            String... replace) {
        return new UserException(code, errorMessageResource.get(code.getCode(), replace));
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
