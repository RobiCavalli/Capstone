package com.Capstone.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone.entity.Cliente;
import com.Capstone.service.ClienteService;

@RestController
@RequestMapping("/api/auth/cliente")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClienteController {

	@Autowired ClienteService cservice;

	@PostMapping
	public ResponseEntity<Cliente> createCliente(Cliente cliente){
		return new ResponseEntity<Cliente>(cservice.createCliente(cliente),HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<Cliente> updateCliente(Cliente cliente){
		return new ResponseEntity<Cliente>(cservice.updateCliente(cliente),HttpStatus.OK); 
		
	}


	@GetMapping
	public ResponseEntity<Set<Cliente>> getAllClienti(Cliente cliente){
		return new ResponseEntity<Set<Cliente>>(cservice.getAllClienti(),HttpStatus.OK); 
			
	}

	@GetMapping("/{id}")
	public ResponseEntity<Cliente> getClienteId (Long id){
		return new ResponseEntity<Cliente>(cservice.getClienteid(id),HttpStatus.OK); 
			
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<String> RimuoviCliente (Long id){
		return new ResponseEntity<String>(cservice.RimuoviCliente(id),HttpStatus.OK);
			
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
