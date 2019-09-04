package com.cinephilia.helper;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public final class PasswordEncryption {

	private PasswordEncryption() {
	}

	public static String encryptionPass (String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(password);

	}
}

