package com.paramdeep.elearningbackend.DTO;

public class UpdateCourseRequest {
	private String userId;
	private int courseId;

	// Getters and setters...

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
}
