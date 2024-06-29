package com.paramdeep.lingoleap_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.User;

public interface CourseRepository extends JpaRepository<Course, Long> {
	List<Course> findByInstructor(User instructor);
}
