package com.cinephilia.persistence.repository;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cinephilia.helper.PasswordEncryption;
import com.cinephilia.persistence.entity.UserEntity;
import com.cinephilia.persistence.entity.UserRoleEntity;
/*
@Service
public class InitDB  implements CommandLineRunner {

@Autowired	
 private UserRepository userRepository ;	
@Autowired
private  RoleRepository  roleRepository;


@Override
public void run(String... args) {
    // Delete all
    this.userRepository.deleteAll();
    this.roleRepository.deleteAll();
 // Crete role
    
    UserRoleEntity roleAdmin = new UserRoleEntity (1 , "ADMIN");
    UserRoleEntity roleUser = new UserRoleEntity (2 , "USER");

    List<UserRoleEntity> roles = Arrays.asList(roleAdmin, roleUser);

    this.roleRepository.saveAll(roles);
    
    // Crete users
    
    UserEntity user = new UserEntity(2,"user@yahoo.fr",PasswordEncryption.encryptionPass("User001@"),"userFirstName","userLastName",roleUser);
    
    UserEntity admin = new UserEntity(1,"admin@yahoo.fr",PasswordEncryption.encryptionPass("Admin001@"),"wejdi","gharbi",roleAdmin);
   
    List<UserEntity> users = Arrays.asList(user,admin);

    // Save to db
    this.userRepository.saveAll(users);
}
	
}

*/