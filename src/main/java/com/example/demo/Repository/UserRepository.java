package com.example.demo.Repository;

import org.springframework.stereotype.Repository;


import com.example.demo.Entity.User;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    public boolean existsByUsername(String username);
}
