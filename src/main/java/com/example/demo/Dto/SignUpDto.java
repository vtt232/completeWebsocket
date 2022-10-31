package com.example.demo.Dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class SignUpDto {
    private String username;
    private String password;
    private List<String> role;
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public List<String> getRole() {
        return role;
    }
    public void setRole(List<String> role) {
        this.role = role;
    }


}
