package org.example.ex3;

public abstract class CargoDeConfianca extends Funcionario {
    public Bonificacao getBonificacao() {
        return bonificacao;
    }

    public void setBonificacao(Bonificacao bonificacao) {
        this.bonificacao = bonificacao;
    }

    protected Bonificacao bonificacao;

    public CargoDeConfianca(String nome, String CPF, String dataNascimento, double salarioBase) {
        super(nome, CPF, dataNascimento, salarioBase);
    }

    @Override
    public String toString() {
        return "CargoDeConfianca{" +
                "bonificacao=" + bonificacao +
                ", nome='" + nome + '\'' +
                ", CPF='" + CPF + '\'' +
                ", dataNascimento='" + dataNascimento + '\'' +
                ", salarioBase=" + salarioBase +
                '}';
    }
}
