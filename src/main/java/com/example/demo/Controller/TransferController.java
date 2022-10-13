package com.example.demo.Controller;

import java.security.Principal;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.Transfer;
import com.example.demo.Service.TransferService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TransferController {

    @Autowired
    private TransferService transferService;

    @MessageMapping("/transfer")
    public String transferNumber(@Payload Transfer transferInfor, Principal principal) {
        String message= "Mr."+principal.getName()+" send you "+transferInfor.getSendingNumber();
        System.out.println(message);
        transferService.transfer(message, transferInfor.getReceiver());
        return "transfer success";
    }
    
}
