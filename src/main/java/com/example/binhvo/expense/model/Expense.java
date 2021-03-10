package com.example.binhvo.expense.model;

import java.time.Instant;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="expense")
public class Expense {
	
	@Id
	private Long id;
	private Instant expenseDate;
	private String description;
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	private User user;
	
}
