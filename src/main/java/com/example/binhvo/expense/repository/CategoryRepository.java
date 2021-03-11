package com.example.binhvo.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.binhvo.expense.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	Category findByName(String name);
}
