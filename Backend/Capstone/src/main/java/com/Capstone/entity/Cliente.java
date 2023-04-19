package com.Capstone.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "clienti")
public class Cliente {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "id_clienti")
	private String name;
	
	@ManyToMany
	@JoinTable(name = "clienti_laboratori",
	joinColumns = @JoinColumn(name ="clienti_id"),
	inverseJoinColumns = @JoinColumn(name = "laboratori_id")
	)
	private Set<Laboratori> laboratoriSet = new HashSet<>();
}
