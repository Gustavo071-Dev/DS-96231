package com.example.revisao_final.model;

public enum Sexo {
    MASCULINO("Masculino"),
    FEMININO("Femino");

    private String text;

    Sexo(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}
