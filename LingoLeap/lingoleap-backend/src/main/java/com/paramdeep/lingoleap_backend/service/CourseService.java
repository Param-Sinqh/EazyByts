package com.paramdeep.lingoleap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.User;
import com.paramdeep.lingoleap_backend.repository.CourseRepository;

@Service
public class CourseService {
	@Autowired
	private CourseRepository courseRepository;

	public Course save(Course course) {
		return courseRepository.save(course);
	}

	public List<Course> findByInstructor(User instructor) {
		return courseRepository.findByInstructor(instructor);
	}
}
