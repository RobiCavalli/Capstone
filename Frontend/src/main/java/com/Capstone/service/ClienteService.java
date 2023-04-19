package com.Capstone.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.entity.Cliente;
import com.Capstone.repository.ClienteRepository;

@Service
public class ClienteService {

@Autowired ClienteRepository crepo;	

public Cliente createCliente (Cliente cliente) {
	crepo.save(cliente);
	return cliente;
}



public Cliente updateCliente(Cliente cliente) {
	return crepo.save(cliente);
}

public Cliente getClienteid(Long id) {
	return crepo.findById(id).get();

}

public Set<Cliente> getAllClienti() {
	return (Set<Cliente>) crepo.findAll();
	
}
	
public String RimuoviCliente(Long id) {
	crepo.deleteById(id);
	return "hai eliminato un cliente";
	
}










	
}
