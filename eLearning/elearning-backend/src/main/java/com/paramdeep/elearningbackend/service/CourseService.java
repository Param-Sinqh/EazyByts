package com.paramdeep.elearningbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.elearningbackend.model.CourseDetails;
import com.paramdeep.elearningbackend.repository.CouseRepository;

@Service
public class CourseService {

	@Autowired
	private CouseRepository courseDao;

	public CourseDetails addCourse(CourseDetails courseDetails) {
		CourseDetails createdCourse = courseDao.save(courseDetails);
		return createdCourse;
	}

	public List<CourseDetails> getAllCourseDetails() {
		List<CourseDetails> findAll = courseDao.findAll();
		return findAll;
	}

	// New method to handle multiple courses
	public void addCourses(List<CourseDetails> courseDetailsList) {
		courseDao.saveAll(courseDetailsList);
	}

	public CourseDetails getCourseById(int courseId) {
		Optional<CourseDetails> optionalCourse = courseDao.findById(courseId);
		return optionalCourse.orElse(null); // Return null if course is not found
	}

	public void deleteCourse(int courseId) {
		courseDao.deleteById(courseId);
	}

}
