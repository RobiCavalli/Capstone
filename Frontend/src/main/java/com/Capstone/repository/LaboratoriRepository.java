package com.Capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.Capstone.entity.Laboratori;
@Repository
public interface LaboratoriRepository extends JpaRepository<Laboratori, Long> {

}
