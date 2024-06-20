package com.paramdeep.elearningbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paramdeep.elearningbackend.model.Material;
import com.paramdeep.elearningbackend.service.MaterialService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/material")
public class MaterialController {

	@Autowired
	private MaterialService materialService;

	@PostMapping("/add")
	public ResponseEntity<String> addMaterial(@RequestBody Material material) {
		Material savedMaterial = materialService.addMaterial(material);
		if (savedMaterial != null) {
			return new ResponseEntity<>("Material addition successful", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Material addition failed", HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@GetMapping("/course/{courseId}")
	public ResponseEntity<List<Material>> getMaterialsByCourseId(@PathVariable int courseId) {
		System.out.println("getting material by courseId");
		List<Material> materials = materialService.getMaterialsByCourseId(courseId);
		if (materials != null && !materials.isEmpty()) {
			return new ResponseEntity<>(materials, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@PutMapping("/updateProgress")
	public ResponseEntity<String> updateMaterialProgress(@RequestParam int materialId,
			@RequestParam boolean isCompleted) {
		try {
			materialService.updateMaterialProgress(materialId, isCompleted);
			return new ResponseEntity<>("Material progress updated successfully", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Material progress update failed", HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@PutMapping("/resetProgress/{courseId}")
	public ResponseEntity<String> resetMaterialProgress(@PathVariable int courseId) {
		try {
			materialService.resetMaterialProgress(courseId);
			return new ResponseEntity<>("All materials progress reset successfully", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Failed to reset materials progress", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
