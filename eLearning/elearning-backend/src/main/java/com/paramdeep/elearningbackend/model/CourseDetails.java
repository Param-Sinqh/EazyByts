package com.paramdeep.elearningbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Courses")
public class CourseDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	private String coursename;
	private String courseauthor;
	private String url;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String content;

//	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Material> materials;
//
//	public List<Material> getMaterials() {
//		return materials;
//	}
//
//	public void setMaterials(List<Material> materials) {
//		this.materials = materials;
//	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public String getCourseauthor() {
		return courseauthor;
	}

	public void setCourseauthor(String courseauthor) {
		this.courseauthor = courseauthor;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
