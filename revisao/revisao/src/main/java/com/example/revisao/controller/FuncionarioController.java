package com.example.revisao.controller;

import com.example.revisao.model.FuncionarioModel;
import com.example.revisao.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class FuncionarioController {
    @Autowired
    private FuncionarioService service;

    @GetMapping
    public List<FuncionarioModel> listar() {
        return service.listartodos();
    }
    @PostMapping
    public ResponseEntity<Map<String, String>>salvar(@RequestBody FuncionarioModel funcionario) {
        service.salvarFuncionario(funcionario);
        return ResponseEntity.status(HttpStatus.CREATED).body((Map.of(
                "Mensagem",
                "Funcionario cadastrado com sucesso"
        )));
    }
    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioModel> atualizar(
            @PathVariable Long id,
            @RequestBody FuncionarioModel funcionario) {

        FuncionarioModel atualizado = service.atualizarFuncionario(id, funcionario);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "funcionario atualizado com sucesso"));
    }
}
