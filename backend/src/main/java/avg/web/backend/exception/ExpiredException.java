package avg.web.backend.exception;


import avg.web.backend.enums.ErrorCode;
import lombok.Getter;

@Getter
public class ExpiredException extends RuntimeException {
    private ErrorCode errorCode;

    public ExpiredException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
