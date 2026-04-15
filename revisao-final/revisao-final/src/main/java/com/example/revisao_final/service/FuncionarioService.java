package com.example.revisao_final.service;

import com.example.revisao_final.model.FuncionarioModel;
import com.example.revisao_final.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class FuncionarioService {
    @Autowired
    private FuncionarioRepository repository;
    public List<FuncionarioModel> listarTodos() {
        return repository.findAll();
    }

    public FuncionarioModel salvarFuncionario(FuncionarioModel funcionario) {
        //Verificar se o cliente não está cadastrado no banco de dados,
        //antes de salvar.

        if (repository.findByEmail(funcionario.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Funcionario já cadastrado.");
        }
        return repository.save(funcionario);
    }
}
