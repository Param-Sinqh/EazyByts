package com.paramdeep.elearningbackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.elearningbackend.model.User;
import com.paramdeep.elearningbackend.service.CreateUserService;
import com.paramdeep.elearningbackend.service.ValidateLoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/demo")
public class SignUpController {

	@Autowired
	private CreateUserService createUserService;

	@Autowired
	private ValidateLoginService validateLoginService;

	@GetMapping("/test")
	public String test() {
		return "Hello world";
	}

	@PostMapping("/signUp")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		User savedUser = createUserService.saveUser(user);
		System.out.println("Created New User :: " + savedUser);

		if (savedUser != null) {
			System.out.println("User Created :: " + savedUser);
			return new ResponseEntity<>("Signup successful", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Signup failed", HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/logIn")
	public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
		User validatedUser = validateLoginService.validateLogin(user);

		if (validatedUser != null && validatedUser.getPassword().equals(user.getPassword())) {
			System.out.println("Login Successful :: " + user.getUserid());
			Map<String, String> response = new HashMap<>();
			response.put("role", validatedUser.getRole());
			response.put("username", validatedUser.getUsername()); // Include username in the response
			return new ResponseEntity<>(response, HttpStatus.OK); // Return role and username in JSON response
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}

}
