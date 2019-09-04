package com.cinephilia.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinephilia.persistence.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String> {

}
