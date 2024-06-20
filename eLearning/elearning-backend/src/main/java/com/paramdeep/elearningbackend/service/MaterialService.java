package com.paramdeep.elearningbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.elearningbackend.model.Material;
import com.paramdeep.elearningbackend.repository.MaterialRepository;

@Service
public class MaterialService {

	@Autowired
	private MaterialRepository materialRepository;

	public Material addMaterial(Material material) {
		return materialRepository.save(material);
	}

	public List<Material> getMaterialsByCourseId(int courseId) {
		return materialRepository.findByCourseId(courseId);
	}

	public void updateMaterialProgress(int materialId, boolean isCompleted) {
		Material material = materialRepository.findById(materialId)
				.orElseThrow(() -> new RuntimeException("Material not found"));
		material.setCompleted(isCompleted);
		materialRepository.save(material);
	}

	public void resetMaterialProgress(int courseId) {
		List<Material> materials = materialRepository.findByCourseId(courseId);
		for (Material material : materials) {
			material.setCompleted(false);
		}
		materialRepository.saveAll(materials);
	}
}
