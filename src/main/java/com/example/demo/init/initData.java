package com.example.demo.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entity.Role;
import com.example.demo.Repository.RoleRepository;

@Component
public class initData implements ApplicationRunner {

    private RoleRepository roleRepository;


    @Autowired
    public initData(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {
        roleRepository.save(new Role(1, "ROLE_USER"));
        roleRepository.save(new Role(2, "ROLE_ADMIN"));
        
    }
}
