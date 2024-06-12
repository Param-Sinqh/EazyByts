package com.paramdeep.elearningbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.elearningbackend.model.CourseDetails;
import com.paramdeep.elearningbackend.service.CourseService;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@PostMapping("/addcourse")
	public ResponseEntity<String> addCourse(@RequestBody CourseDetails courseDetails, @RequestParam String role) {
		if (!role.equals("admin")) {
			return new ResponseEntity<>("Unauthorized", HttpStatus.FORBIDDEN);
		}

		CourseDetails addedCourse = courseService.addCourse(courseDetails);

		if (addedCourse != null) {
			System.out.println("Course Created :: " + addedCourse);
			return new ResponseEntity<>("Course Addition successful", HttpStatus.OK);
		} else {
			System.out.println("Something went wrong");
			return new ResponseEntity<>("Course Addition failed", HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@PostMapping("/addcourses")
	public ResponseEntity<String> addCourses(@RequestBody List<CourseDetails> courseDetailsList,
			@RequestParam String role) {
		if (!role.equals("admin")) {
			return new ResponseEntity<>("Unauthorized", HttpStatus.FORBIDDEN);
		}

		try {
			courseService.addCourses(courseDetailsList);
			return new ResponseEntity<>("Courses addition successful", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("Something went wrong: " + e.getMessage());
			return new ResponseEntity<>("Courses addition failed", HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@DeleteMapping("/deletecourse")
	public ResponseEntity<String> deleteCourse(@RequestParam int courseId, @RequestParam String role) {
		if (!role.equals("admin")) {
			return new ResponseEntity<>("Unauthorized", HttpStatus.FORBIDDEN);
		}

		try {
			courseService.deleteCourse(courseId);
			return new ResponseEntity<>("Course deletion successful", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("Something went wrong: " + e.getMessage());
			return new ResponseEntity<>("Course deletion failed", HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@GetMapping("/get/{id}")
	public CourseDetails getCourseById(@PathVariable int id) {
		return courseService.getCourseById(id);
	}

	@GetMapping("/getall")
	public ResponseEntity<List<CourseDetails>> getAllCourses() {
		List<CourseDetails> allCourseDetails = courseService.getAllCourseDetails();
		if (allCourseDetails.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(allCourseDetails, HttpStatus.OK);
		}
	}
}
