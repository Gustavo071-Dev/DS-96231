package org.example.ex3;

public enum Bonificacao {
    GERENTE(1.3),
    DIRETOR(1.4);

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    private double valor;

    Bonificacao(double v) {
    }

    @Override
    public String toString() {
        return "Bonificacao{" +
                "valor=" + valor +
                '}';
    }
}
