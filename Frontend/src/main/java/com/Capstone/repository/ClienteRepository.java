package com.Capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Capstone.entity.Cliente;
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
Cliente findByName(String name);
}
