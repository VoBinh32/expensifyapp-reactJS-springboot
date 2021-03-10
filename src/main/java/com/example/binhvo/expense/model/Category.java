package com.example.binhvo.expense.model;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="category")

public class Category {

	@Id
	private Long id;
	private String name;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	private User user;
}
