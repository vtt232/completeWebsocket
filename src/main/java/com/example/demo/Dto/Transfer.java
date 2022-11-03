package com.example.demo.Dto;

public class Transfer {

    private int number;
    private String receiver;

    public Transfer() {
    }


    public Transfer(int number, String receiver) {
        this.number = number;
        this.receiver = receiver;
    }


    public int getSendingNumber() {
        return number;
    }
    public void setSendingNumber(int number) {
        this.number = number;
    }

    
    public String getReceiver() {
        return receiver;
    }
    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }


    public int getNumber() {
        return number;
    }


    public void setNumber(int number) {
        this.number = number;
    }
    
}
