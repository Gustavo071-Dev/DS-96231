package org.example.ex3;

public class MotoBoy extends Funcionario implements SalarioFinal{
    public String getPlacaDaMoto() {
        return placaDaMoto;
    }

    public void setPlacaDaMoto(String placaDaMoto) {
        this.placaDaMoto = placaDaMoto;
    }

    private String placaDaMoto;

    public MotoBoy(String nome, String CPF, String dataNascimento, double salarioBase) {
        super(nome, CPF, dataNascimento, salarioBase);
    }

    @Override
    public String toString() {
        return "MotoBoy{" +
                "placaDaMoto='" + placaDaMoto + '\'' +
                ", nome='" + nome + '\'' +
                ", CPF='" + CPF + '\'' +
                ", dataNascimento='" + dataNascimento + '\'' +
                ", salarioBase=" + salarioBase +
                '}';
    }
}




