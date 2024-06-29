package com.paramdeep.lingoleap_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody User user) {
		return ResponseEntity.ok(userService.save(user));
	}

	@GetMapping("/{username}")
	public ResponseEntity<User> getUser(@PathVariable String username) {
		return userService.findByUsername(username).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}
}
