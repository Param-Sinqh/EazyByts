package com.paramdeep.elearningbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.elearningbackend.DTO.UpdateCourseRequest;
import com.paramdeep.elearningbackend.model.User;
import com.paramdeep.elearningbackend.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/updateCourse")
	public ResponseEntity<String> updateUserCourse(@RequestBody UpdateCourseRequest request) {
		try {
			User updatedUser = userService.updateUserCourse(request.getUserId(), request.getCourseId());
			return new ResponseEntity<>("Course updated successfully for user: " + updatedUser.getUsername(),
					HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/removeCourse")
	public ResponseEntity<String> removeUserCourse(@RequestBody UpdateCourseRequest request) {
		try {
			User updatedUser = userService.removeUserCourse(request.getUserId());
			return new ResponseEntity<>("Course removed successfully for user: " + updatedUser.getUsername(),
					HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
