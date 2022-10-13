package com.example.demo.Dto;

import java.util.Date;

public class StudentDto {
    private int id;
    private String name;
    private int age;
    private String lastModifiedBy;
    private Date lastModifiedDate;

    public StudentDto(){}

    public StudentDto(int id, String name, int age, String lastModifiedBy, Date lastModifiedDate){
        this.id=id;
        this.name = name;
        this.age=age;
        this.lastModifiedBy=lastModifiedBy;
        this.lastModifiedDate=lastModifiedDate;
    }

    public int getId(){
        return this.id;
    }

    public int getAge(){
        return this.age;
    }

    public String getName(){
        return this.name;
    }

    public String getLastModifiedBy(){
        return this.lastModifiedBy;
    }

    public Date getLastModifiedDate(){
         return this.lastModifiedDate;
    }

    public void setId(int id){
        this.id=id;
    }

    public void setName(String name){
        this.name=name;
    }

    public void setAge(int age){
        this.age=age;
    }

    public void setLastModifiedBy(String lastModifiedBy){
        this.lastModifiedBy=lastModifiedBy;
    }

    public void setLastModifiedDate(Date lastModifiedDate){
        this.lastModifiedDate=lastModifiedDate;
    }

}
