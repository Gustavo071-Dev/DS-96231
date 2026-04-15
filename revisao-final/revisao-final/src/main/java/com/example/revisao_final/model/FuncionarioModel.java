package com.example.revisao_final.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;

@Entity
public class FuncionarioModel {
    @Id
    private int id;
    private String nome;
    private double salario;
    private String email;

    @Enumerated (EnumType.STRING)
    private Setor setor;

    @Enumerated (EnumType.STRING)
    private Sexo sexo;

    public FuncionarioModel() {
    }

    public FuncionarioModel(int id, String nome, double salario, String email, Setor setor, Sexo sexo) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
        this.email = email;
        this.setor = setor;
        this.sexo = sexo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Setor getSetor() {
        return setor;
    }

    public void setSetor(Setor setor) {
        this.setor = setor;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }
}
