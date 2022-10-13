package com.example.demo.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;



import com.example.demo.Entity.Role;

import com.example.demo.Entity.User;
import com.example.demo.Entity.UserPrincipal;

import com.example.demo.Repository.UserRepository;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserDetailsServiceImp implements UserDetailsService {

    private  UserRepository userRepository;

    public UserDetailsServiceImp(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    
    private Collection<SimpleGrantedAuthority> mapRolesToAuthorities(List<Role> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }


    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {

        User user = userRepository.findByUsername(name).get();
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        Collection<SimpleGrantedAuthority> authorities= mapRolesToAuthorities(user.getRoles());

        return new UserPrincipal(user.getUsername(), user.getPassword(),user.isEnabled(), authorities);
    }
    
}
