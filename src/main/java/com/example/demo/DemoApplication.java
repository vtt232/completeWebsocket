package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;




@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.example.demo.Entity"}) 
public class DemoApplication {


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("hello");
	}

}
