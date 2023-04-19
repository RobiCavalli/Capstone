package com.Capstone.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.entity.Laboratori;
import com.Capstone.repository.LaboratoriRepository;

@Service
public class LaboratoriService {

	@Autowired
	LaboratoriRepository lrepo;

	public Laboratori createLaboratori(Laboratori laboratori) {
		lrepo.save(laboratori);
		return laboratori;
	}


	public Laboratori updateLaboratori(Laboratori laboratorio) {
		return lrepo.save(laboratorio);
	}

	public Laboratori getLaboratorioid(Long id) {
		return lrepo.findById(id).get();

	}

	public List<Laboratori> getAllLaboratori() {
		return (List<Laboratori>) lrepo.findAll();

	}

	public String RimuoviLaboratori(Long id) {
		lrepo.deleteById(id);
		return "hai eliminato un laboratorio";

	}
	

	
	

}
