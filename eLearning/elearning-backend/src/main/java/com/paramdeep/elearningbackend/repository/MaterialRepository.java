package com.paramdeep.elearningbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paramdeep.elearningbackend.model.Material;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Integer> {
	// custom queries if needed
	List<Material> findByCourseId(int courseId);
}