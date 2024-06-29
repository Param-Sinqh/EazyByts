package com.paramdeep.lingoleap_backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public User save(User user) {
		return userRepository.save(user);
	}

	public Optional<User> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
}
