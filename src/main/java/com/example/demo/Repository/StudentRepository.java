package com.example.demo.Repository;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>  {
    public Page<Student> findAll(Pageable pageable);

    public Student findStudentById(int id);

    public List<Student> findStudentByAge(int age);

    public Student findStudentByName(String name);


}
