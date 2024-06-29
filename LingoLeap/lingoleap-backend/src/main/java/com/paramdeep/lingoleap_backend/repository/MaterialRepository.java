package com.paramdeep.lingoleap_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.Material;

public interface MaterialRepository extends JpaRepository<Material, Long> {
	List<Material> findByCourse(Course course);
}
