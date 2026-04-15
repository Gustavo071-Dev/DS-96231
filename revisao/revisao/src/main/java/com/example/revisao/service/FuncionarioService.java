package com.example.revisao.service;

import com.example.revisao.model.FuncionarioModel;
import com.example.revisao.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.List;
import java.util.Map;

@Service
public class FuncionarioService {
    @Autowired
    private FuncionarioRepository repository;

    public List<FuncionarioModel> listartodos() {
        return repository.findAll();
    }

    public FuncionarioModel salvarFuncionario(FuncionarioModel funcionario) {
        //Verificar se o cliente não está cadastrado no banco de dados,
        //antes de salvar.
        if (repository.findByEmail(funcionario.getEmail()).isPresent()) {
            throw new RuntimeException("Funcionario já cadastrado!");
        }
        return repository.save(funcionario);
    }

    public FuncionarioModel atualizarFuncionario(Long id, FuncionarioModel funcionario) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Funcionario não encontrado.");
        }
        //Mantem o id para não criar outro funcionario.
        //Altera todos os outros dados.
        funcionario.setId(id);
        return repository.save(funcionario);
    }

    public void exlcuir(Long id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Funcionario não encontrado.");
        }
        repository.deleteById(id);
    }

}