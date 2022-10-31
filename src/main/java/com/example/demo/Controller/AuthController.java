package com.example.demo.Controller;




import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.AuthResponseDto;
import com.example.demo.Dto.LoginDto;
import com.example.demo.Dto.SignUpDto;


import com.example.demo.Service.AuthService;



@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping(path="/auth")
public class AuthController {

    @Value("${app.successLogin}")
    private int successLogin;
    
    @Value("${app.failureLogin}")
    private int failureLogin;

    
    private AuthService authService;
    public AuthController(AuthService authService){
        this.authService=authService;
    }
    
    @PostMapping(path="/login", produces = "application/json", consumes = "application/json")
    public ResponseEntity<AuthResponseDto> authenticateUser(@RequestBody LoginDto loginDto){
        System.out.println(loginDto);
        String tolken = authService.authenticateStudent(loginDto);
        AuthResponseDto authResponseDto = new AuthResponseDto();
        if(tolken!=null){
            ResponseCookie springCookie = ResponseCookie.from("jwtToken", tolken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .maxAge(86400)
            .build();
            authResponseDto.setResponse("Login sucess");
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, springCookie.toString()).body(authResponseDto);
        }
        authResponseDto.setResponse("Something wrong");
        return ResponseEntity.badRequest().body(authResponseDto);
    }

    @PostMapping(path="/signup", produces = "application/json", consumes = "application/json")
    public ResponseEntity<AuthResponseDto> registerUser(@RequestBody SignUpDto signUpDto) {
        System.out.println(signUpDto.getUsername());
        if(signUpDto.getRole().size()==0){
            ArrayList<String> defaultRole =  new ArrayList<String>();
            defaultRole.add("ROLE_USER");
            signUpDto.setRole(defaultRole);
        }
        int result = authService.registerUser(signUpDto);
        AuthResponseDto authResponseDto = new AuthResponseDto();
        if(result == successLogin){
            authResponseDto.setResponse("Signup sucess");
            return ResponseEntity.ok(authResponseDto);

        }else if (result == failureLogin){
            authResponseDto.setResponse("Signup fail");
            return ResponseEntity.badRequest().body(authResponseDto);
        }
        authResponseDto.setResponse("Something wrong");
        return ResponseEntity.badRequest().body(authResponseDto);
    }
}