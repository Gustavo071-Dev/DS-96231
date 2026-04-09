package com.example.projeto.repository;

import com.example.projeto.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, Long> {
    //Consultar no banco de dados se o mail já existe,
    //Antes de salvar um cliente.
    Optional<ClienteModel> findByEmail(String email);
}
