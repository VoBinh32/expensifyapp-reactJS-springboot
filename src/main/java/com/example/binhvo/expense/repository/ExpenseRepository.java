package com.example.binhvo.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.binhvo.expense.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
	
}
