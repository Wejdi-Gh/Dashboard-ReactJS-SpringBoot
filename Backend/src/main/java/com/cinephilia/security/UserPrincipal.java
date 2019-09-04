package com.cinephilia.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cinephilia.persistence.entity.UserEntity;



import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserPrincipal implements UserDetails {
    
	private static final long serialVersionUID = 1L;
	private UserEntity user;

    public UserPrincipal(UserEntity user){
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

       
            GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" +  this.user.getRole().getRoleName());
            authorities.add(authority);
       
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }
    
   
    public String getRoles() {
        return this.user.getRole().getRoleName();
    }
    
    public String getUserFirstName() {
		return this.user.getFirstName();
	}

	public String getUserLastName() {
		return this.user.getLastName();
	}
    
    

    @Override
    public String getUsername() {
        return this.user.getMail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

	@Override
	public boolean isEnabled() {
		
		 return true;
	}

    
}
