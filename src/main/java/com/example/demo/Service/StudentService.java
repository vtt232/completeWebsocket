package com.example.demo.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.lang.reflect.Type;



import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import com.example.demo.Dto.StudentDto;
import com.example.demo.Entity.Student;
import com.example.demo.Repository.StudentRepository;

@Service
public class StudentService{
    private StudentRepository studentRepository;
    private final ModelMapper mapper;

    public StudentService( StudentRepository studentRepository, ModelMapper mapper) {
        this.studentRepository = studentRepository;
        this.mapper=mapper;
    }

    public List<StudentDto> getAllStudents(int pageNo, int pageSize, String sortBy, Optional<Integer> age) {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
        List<Student> students = new ArrayList<Student>();
        if(age.isPresent()){
            students = studentRepository.findStudentByAge(age.get());
        }
        else{
            Page<Student> studentsPage = studentRepository.findAll(paging);
            students = studentsPage.getContent();
        }
        Type listType = new TypeToken<List<StudentDto>>() {}.getType();
        List<StudentDto> studentDtos = mapper.map(students, listType);
        return studentDtos;
    }
    
    public StudentDto  getById(int id) {
        Student students = studentRepository.findStudentById(id);
        if(students != null){
            StudentDto studentDtos = mapper.map(students, StudentDto.class);
            return studentDtos;
        }
        else{
            return null;
        }
    }

    public List<StudentDto> addStudent(StudentDto newStudentDto) {
        Student newStudent = mapper.map(newStudentDto, Student.class);
        studentRepository.save(newStudent);
        return getAllStudents(0,2,"age", Optional.empty());
    }

    public List<StudentDto> updateStudent(int id, StudentDto studentUpdateDetail) {
        Student updateStudent = studentRepository.findStudentById(id);
        updateStudent.setAge(studentUpdateDetail.getAge());
        studentRepository.save(updateStudent);
        return getAllStudents(0,2,"age",Optional.empty());
    }

    public List<StudentDto> deleteStudent(int id) {
        Student deleteStudent = studentRepository.findStudentById(id);
        studentRepository.delete(deleteStudent);
        return getAllStudents(0,2,"age",Optional.empty());
    }

    public long findDataSize(){
        return studentRepository.count();
    }

}
