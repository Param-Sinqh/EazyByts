package com.paramdeep.lingoleap_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
	@Autowired
	private CourseService courseService;

	@PostMapping
	public ResponseEntity<Course> createCourse(@RequestBody Course course) {
		return ResponseEntity.ok(courseService.save(course));
	}

	@GetMapping("/instructor/{instructorId}")
	public ResponseEntity<List<Course>> getCoursesByInstructor(@PathVariable Long instructorId) {
		User instructor = new User();
		instructor.setId(instructorId);
		return ResponseEntity.ok(courseService.findByInstructor(instructor));
	}
}
