package com.paramdeep.lingoleap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.Enrollment;
import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.repository.EnrollmentRepository;

@Service
public class EnrollmentService {
	@Autowired
	private EnrollmentRepository enrollmentRepository;

	public Enrollment save(Enrollment enrollment) {
		return enrollmentRepository.save(enrollment);
	}

	public List<Enrollment> findByStudent(User student) {
		return enrollmentRepository.findByStudent(student);
	}

	public List<Enrollment> findByCourse(Course course) {
		return enrollmentRepository.findByCourse(course);
	}
}
