package com.cinephilia.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cinephilia.persistence.entity.UserEntity;
import com.cinephilia.persistence.repository.UserRepository;


@Service
public class UserPrincipalDetailsService implements UserDetailsService {
	
	@Autowired
    private UserRepository userRepository;

  

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = this.userRepository.findById(email).get();
        UserPrincipal userPrincipal = new UserPrincipal(user);

        return userPrincipal;
    }
}
