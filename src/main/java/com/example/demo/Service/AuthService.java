package com.example.demo.Service;



import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.LoginDto;
import com.example.demo.Dto.SignUpDto;
import com.example.demo.Entity.Role;

import com.example.demo.Entity.User;
import com.example.demo.Repository.RoleRepository;

import com.example.demo.Repository.UserRepository;
import com.example.demo.security.JwtProvider;

@Service
public class AuthService {
    private UserRepository userRepository;

    @Value("${app.successLogin}")
    private int successLogin;
    
    @Value("${app.failureLogin}")
    private int failureLogin;


    private AuthenticationManager authenticationManager;

    private RoleRepository roleRepository;

    private PasswordEncoder passwordEncoder;

    private JwtProvider jwtProvider;


    public AuthService(AuthenticationManager authenticationManager, UserRepository userRepository, 
     RoleRepository roleRepository,PasswordEncoder passwordEncoder, 
    JwtProvider jwtProvider)
    {
        this.authenticationManager=authenticationManager;
        this.userRepository=userRepository;
        this.roleRepository=roleRepository;
        this.passwordEncoder=passwordEncoder;
        this.jwtProvider=jwtProvider;
    }

    public String authenticateStudent(LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken =jwtProvider.generateToken(authentication);
        return jwtToken;
    }

    public int registerUser(SignUpDto signUpDto){
        // add check for username exists in a DB
     if(userRepository.existsByUsername(signUpDto.getUsername())){
            return failureLogin;
        }



        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));


        

        User newUser = new User(signUpDto.getUsername(),signUpDto.getPassword(),true);

        List<Role> listRoles = new ArrayList<Role>();


        for(String roleName:signUpDto.getRole()){
                Role role = roleRepository.findByName(roleName);
                listRoles.add(role);
        }


        newUser.setRoles(listRoles);


        userRepository.save(newUser);

        return successLogin;
    }

}
