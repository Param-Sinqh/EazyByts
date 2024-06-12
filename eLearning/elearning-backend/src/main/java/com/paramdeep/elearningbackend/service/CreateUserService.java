package com.paramdeep.elearningbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.elearningbackend.model.User;
import com.paramdeep.elearningbackend.repository.UserRepository;

@Service
public class CreateUserService {

	@Autowired
	private UserRepository userDao;

	public User saveUser(User user) {
		user.setRole("user"); // Set default role to "user"
		User details = userDao.save(user);
		return details;

	}

}
