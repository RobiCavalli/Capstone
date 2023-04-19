package com.Capstone.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.Capstone.entity.Cliente;
import com.Capstone.service.ClienteService;

@Component
public class ClienteRunner implements ApplicationRunner {

	@Autowired
	ClienteService cservice;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Cienterun");

		Cliente c1 = new Cliente();
		Cliente c2 = new Cliente();
		Cliente c3 = new Cliente();
		Cliente c4 = new Cliente();

		c1.setName("Mario");
		c2.setName("Giuseppe");
		c3.setName("Giada");
		c4.setName("Gaia");
		cservice.createCliente(c1);
		cservice.createCliente(c2);
		cservice.createCliente(c3);
		cservice.createCliente(c4);

	}

}
