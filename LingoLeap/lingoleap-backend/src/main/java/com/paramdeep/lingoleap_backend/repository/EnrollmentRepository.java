package com.paramdeep.lingoleap_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.Enrollment;
import com.paramdeep.lingoleap_backend.model.User;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
	List<Enrollment> findByStudent(User student);

	List<Enrollment> findByCourse(Course course);
}
