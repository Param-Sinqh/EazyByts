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
import com.paramdeep.lingoleap_backend.model.Material;
import com.paramdeep.lingoleap_backend.service.MaterialService;

@RestController
@RequestMapping("/api/materials")
public class MaterialController {
	@Autowired
	private MaterialService materialService;

	@PostMapping
	public ResponseEntity<Material> uploadMaterial(@RequestBody Material material) {
		return ResponseEntity.ok(materialService.save(material));
	}

	@GetMapping("/course/{courseId}")
	public ResponseEntity<List<Material>> getMaterialsByCourse(@PathVariable Long courseId) {
		Course course = new Course();
		course.setId(courseId);
		return ResponseEntity.ok(materialService.findByCourse(course));
	}
}
	