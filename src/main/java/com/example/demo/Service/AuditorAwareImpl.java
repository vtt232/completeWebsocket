package com.example.demo.Service;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.demo.Entity.UserPrincipal;



public class AuditorAwareImpl implements AuditorAware<String> {


    @Override
    public Optional<String> getCurrentAuditor() {
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            Authentication auth = (Authentication) SecurityContextHolder.getContext().getAuthentication();
            Object principal = auth.getPrincipal();
            UserPrincipal userPrincipal = (UserPrincipal) principal;
            Optional<String> res = Optional.of(userPrincipal.getUsername());
            return res;
        } else {
            return null;
        }
    }
    
}
