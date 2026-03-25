package com.example.spring_basico.controller;

import com.example.spring_basico.models.UsuarioModel;
import com.example.spring_basico.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private UsuarioRepository usuarioRepository;

    public List<UsuarioModel> UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;

        @GetMapping
        public List<UsuarioModel> listarTodos() {
            return usuarioRepository.findAll();
        }

    }
}
