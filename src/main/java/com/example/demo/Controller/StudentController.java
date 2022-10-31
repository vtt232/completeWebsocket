package com.example.demo.Controller;



import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.StudentDto;
import com.example.demo.Service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping(path="/students")
public class StudentController {
    private StudentService studentService;

    public StudentController( StudentService studentService){
        this.studentService = studentService;
    }

    @GetMapping(path = "/",produces = "application/json")
    public List<StudentDto> getAllStudents( @RequestParam(name="page", defaultValue = "0") int pageNo, 
    @RequestParam(name="size", defaultValue = "2") int pageSize,
    @RequestParam(name="sort",defaultValue = "age") String sortBy,
    @RequestParam(name="age") Optional<Integer> age)
    {
        return studentService.getAllStudents(pageNo, pageSize, sortBy, age);
    }

    @GetMapping(path="/{id}",produces = "application/json")
    public Optional<StudentDto> getStudent(@PathVariable int id, Principal principal, Authentication auth) {
        StudentDto studentList = studentService.getById(id);
        boolean checkAdmin = false;
        
        Collection<SimpleGrantedAuthority> authorities = (Collection<SimpleGrantedAuthority>) auth.getAuthorities();
        System.out.println(authorities.size());
        for (SimpleGrantedAuthority role : authorities) {
            if(role.getAuthority().equals("ROLE_ADMIN")){
                checkAdmin=true;
            }
       }
        if(checkAdmin ||principal.getName().equals(studentList.getName()))
        {
            Optional<StudentDto> result = Optional.of(studentList);
            if (result.isPresent()) {
                return result;
            }
        }
        return null;
    }


    @PostMapping(path="/",produces = "application/json", consumes = "application/json")
    public List<StudentDto> addStudent(@RequestBody StudentDto newStudent) {
        List<StudentDto> studentList = studentService.addStudent(newStudent);
        if (studentList == null) {
            return null;
        }
        else {
            return studentList;
        }
    }

    @PutMapping(path = "/{id}", produces = "application/json", consumes = "application/json")
    public List<StudentDto> updateStudent(@PathVariable int id, @RequestBody StudentDto studentUpdateDetail) {
        List<StudentDto> result = studentService.updateStudent(id, studentUpdateDetail);
        return result;
    }

    @DeleteMapping(path ="/{id}",produces = "application/json")
    public List<StudentDto> deleteStudent(@PathVariable int id) {
        List<StudentDto> studentList = studentService.deleteStudent(id);
        if (studentList == null) {
            return null;
        }
        else {
            return studentList;
        }

    }

    @GetMapping(path="/numbers")
    public long getNumberOfStudents(){
        long dataSize = studentService.findDataSize();
        return dataSize;
    }

    

}
