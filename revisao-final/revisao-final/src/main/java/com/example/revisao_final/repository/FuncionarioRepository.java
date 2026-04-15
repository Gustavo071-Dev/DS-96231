package com.example.revisao_final.repository;

import com.example.revisao_final.model.FuncionarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FuncionarioRepository extends JpaRepository<FuncionarioModel, Long> {
    //Consultar no banco de dados se o mail já existe,
    //Antes de salvar um cliente.

    Optional<FuncionarioModel> findByEmail(String email);
}
