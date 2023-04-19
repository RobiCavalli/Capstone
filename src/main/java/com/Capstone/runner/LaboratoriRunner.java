package com.Capstone.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.Capstone.entity.Laboratori;
import com.Capstone.service.LaboratoriService;
@Component
public class LaboratoriRunner implements ApplicationRunner {
    
	@Autowired 
	LaboratoriService lservice;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
        System.out.println("Laboratorirun");
    
     Laboratori l1 = new Laboratori();   
     Laboratori l2 = new Laboratori();   
     Laboratori l3 = new Laboratori();   
     Laboratori l4 = new Laboratori();   
     //1
     l1.setTitolo("Laboratorio con BeeBot");
     l1.setUrl("https://res.cloudinary.com/dx7j6eumf/image/upload/v1681826834/cbeebot_xmmhjt.jpg");
     //2
     l2.setTitolo("Laboratorio con Mtiny");
     l2.setUrl("https://res.cloudinary.com/dx7j6eumf/image/upload/v1681826863/mtiny_mcruoi.jpg");
     //3
     l3.setTitolo("Laboratorio con MakeyMakey");
     l3.setUrl("https://res.cloudinary.com/dx7j6eumf/image/upload/v1681826844/makey_kk0cad.jpg");
     //4    
     
     l4.setTitolo("Laboratorio con Codey");
     l4.setUrl("https://res.cloudinary.com/dx7j6eumf/image/upload/v1681826744/codey_crmf8n.jpg");
     
     
     lservice.createLaboratori(l1);
     lservice.createLaboratori(l2);
     lservice.createLaboratori(l3);
     lservice.createLaboratori(l4);
   
     
     
	}

}
