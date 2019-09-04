package com.cinephilia.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinephilia.persistence.entity.UserRoleEntity;

public interface RoleRepository extends JpaRepository<UserRoleEntity, Integer>{

}
