package com.example.demo.Dto;

import lombok.Data;

@Data
public class AuthResponseDto {
    private String response;

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }


}
