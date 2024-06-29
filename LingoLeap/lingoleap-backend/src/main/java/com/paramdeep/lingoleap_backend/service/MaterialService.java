package com.paramdeep.lingoleap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.lingoleap_backend.model.Course;
import com.paramdeep.lingoleap_backend.model.Material;
import com.paramdeep.lingoleap_backend.repository.MaterialRepository;

@Service
public class MaterialService {
	@Autowired
	private MaterialRepository materialRepository;

	public Material save(Material material) {
		return materialRepository.save(material);
	}

	public List<Material> findByCourse(Course course) {
		return materialRepository.findByCourse(course);
	}
}
