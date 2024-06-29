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
import com.paramdeep.lingoleap_backend.model.Enrollment;
import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.service.EnrollmentService;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {
	@Autowired
	private EnrollmentService enrollmentService;

	@PostMapping
	public ResponseEntity<Enrollment> enroll(@RequestBody Enrollment enrollment) {
		return ResponseEntity.ok(enrollmentService.save(enrollment));
	}

	@GetMapping("/student/{studentId}")
	public ResponseEntity<List<Enrollment>> getEnrollmentsByStudent(@PathVariable Long studentId) {
		User student = new User();
		student.setId(studentId);
		return ResponseEntity.ok(enrollmentService.findByStudent(student));
	}

	@GetMapping("/course/{courseId}")
	public ResponseEntity<List<Enrollment>> getEnrollmentsByCourse(@PathVariable Long courseId) {
		Course course = new Course();
		course.setId(courseId);
		return ResponseEntity.ok(enrollmentService.findByCourse(course));
	}
}
