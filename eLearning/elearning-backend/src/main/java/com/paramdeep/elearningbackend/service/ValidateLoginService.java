package com.paramdeep.elearningbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.elearningbackend.model.User;
import com.paramdeep.elearningbackend.repository.UserRepository;

@Service
public class ValidateLoginService {

	@Autowired
	private UserRepository userDao;

	public User validateLogin(User user) {
		User foundUser = userDao.findByUserid(user.getUserid());
		if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
			return foundUser; // Return the entire User object, including the role
		}
		return null; // Return null if validation fails
	}
}
