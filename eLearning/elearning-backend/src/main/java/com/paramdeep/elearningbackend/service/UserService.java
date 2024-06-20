package com.paramdeep.elearningbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paramdeep.elearningbackend.model.CourseDetails;
import com.paramdeep.elearningbackend.model.User;
import com.paramdeep.elearningbackend.repository.CouseRepository;
import com.paramdeep.elearningbackend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userDao;

	@Autowired
	private CouseRepository courseDao;

	public User updateUserCourse(String userId, int courseId) {
		User user = userDao.findByUserid(userId);

		if (user != null) {
			if (!"user".equals(user.getRole())) {
				throw new IllegalArgumentException(
						"User with userId " + userId + " is not authorized to update courses.");
			}

			if (user.getCourse() != null) {
				throw new IllegalArgumentException("User with userId " + userId + " already has an assigned course.");
			}

			CourseDetails course = courseDao.findById(courseId).orElse(null);
			if (course != null) {
				user.setCourse(course);
				return userDao.save(user);
			} else {
				throw new IllegalArgumentException("Invalid course ID");
			}
		} else {
			throw new IllegalArgumentException("User not found with userId: " + userId);
		}
	}

	public User removeUserCourse(String userId) {
		User user = userDao.findByUserid(userId);

		if (user != null) {
			if (!"user".equals(user.getRole())) {
				throw new IllegalArgumentException(
						"User with userId " + userId + " is not authorized to update courses.");
			}

			if (user.getCourse() == null) {
				throw new IllegalArgumentException("User with userId " + userId + " does not have an assigned course.");
			}

			user.setCourse(null);
			return userDao.save(user);
		} else {
			throw new IllegalArgumentException("User not found with userId: " + userId);
		}
	}
}
