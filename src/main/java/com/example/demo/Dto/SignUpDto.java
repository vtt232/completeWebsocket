package com.example.demo.Dto;

import java.util.List;


import lombok.Data;

@Data
public class SignUpDto {
    private String username;
    private String password;
    private List<String> role;

}
