package com.ssafy.healingdiary.global.error;

import java.time.LocalDateTime;
import lombok.Getter;

@Getter

public class ErrorResponse {

    private final LocalDateTime time = LocalDateTime.now();
    private final int status;
    private final String error;
    private final String code;
    private final String message;

    public ErrorResponse(ErrorCode errorCode) {
        this.status = errorCode.getStatus().value();
        this.error = errorCode.getStatus().name();
        this.code = errorCode.name();
        this.message = errorCode.getMessage();
    }

}
