package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;



@Service
public class TransferService {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void transfer(String message, String username) {

        System.out.println(username);
        
        messagingTemplate.convertAndSendToUser(
                username,
                "/queue/notify",
                message
        );
    }
    
}
