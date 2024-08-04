package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.example.main.model"})
@EnableJpaRepositories(basePackages = {"com.example.main.repository"})
public class ReservarEntradaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservarEntradaApplication.class, args);
	}
}
