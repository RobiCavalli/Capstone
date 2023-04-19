package com.Capstone.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone.entity.Laboratori;
import com.Capstone.service.LaboratoriService;

@RestController
@RequestMapping("/api/auth/laboratorio")
@CrossOrigin(origins = "*", maxAge = 3600)
public class LaboratorioController {
	
	@Autowired LaboratoriService lservice;

	@PostMapping
	public ResponseEntity<Laboratori> createLaboratori(Laboratori laboratori){
		return new ResponseEntity<Laboratori>(lservice.createLaboratori(laboratori),HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Laboratori> updateLaboratori(Laboratori laboratori){
		return new ResponseEntity<Laboratori>(lservice.updateLaboratori(laboratori),HttpStatus.OK); 
		
	}


	@GetMapping
	public ResponseEntity<List<Laboratori>> getAllLaboratori(){
		return new ResponseEntity<List<Laboratori>>(lservice.getAllLaboratori(),HttpStatus.OK); 
			
	}

	@GetMapping( value ="/{id}")
	public ResponseEntity<Laboratori> getLaboratorioid (@PathVariable Long id){
		//System.out.println("id");
		return new ResponseEntity<Laboratori>(lservice.getLaboratorioid(id),HttpStatus.OK); 
			
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<String> RimuoviLaboratori (Long id){
		return new ResponseEntity<String>(lservice.RimuoviLaboratori(id),HttpStatus.OK);
			
	}
	
	
	
}
