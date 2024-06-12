package com.paramdeep.elearningbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paramdeep.elearningbackend.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	// get user details by username
	User findByUserid(String userid);
}
