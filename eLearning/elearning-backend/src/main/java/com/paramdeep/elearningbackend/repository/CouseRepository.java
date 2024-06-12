package com.paramdeep.elearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paramdeep.elearningbackend.model.CourseDetails;

@Repository
public interface CouseRepository extends JpaRepository<CourseDetails, Integer> {

}
