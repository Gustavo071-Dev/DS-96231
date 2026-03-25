package com.example.spring_basico.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Welcome {

    @GetMapping("/teste")
    public String mensagem() {
        return "Bem-vindo!";
    }

         @GetMapping("/dev")
                 public String nome() {
             return "Feito por: Gustavo";
        }

    }


