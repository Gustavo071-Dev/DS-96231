package com.example.revisao.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tab_funcionario")
public class FuncionarioModel {
    @Id
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String matricula;

    public FuncionarioModel() {
    }

    public FuncionarioModel(String email, Long id, String nome, String cpf, String matricula) {
        this.email = email;
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }
}
