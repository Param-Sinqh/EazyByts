-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2024 at 10:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactelearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `course_details`
--

CREATE TABLE `course_details` (
  `id` int(11) NOT NULL,
  `courseauthor` varchar(255) DEFAULT NULL,
  `coursename` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_details`
--

INSERT INTO `course_details` (`id`, `courseauthor`, `coursename`, `url`, `content`) VALUES
(1, 'Programming with Mosh', 'React JS Full Course', 'https://www.youtube.com/watch?v=RVFAyFWO4go', 'In this comprehensive React JS course by Programming with Mosh, you will learn everything from the fundamentals to advanced topics in React development. Mosh Hamedani, an experienced software engineer, covers topics such as React components, JSX syntax, props, state, lifecycle methods, hooks, and more. The course includes practical examples and exercises to reinforce your learning.'),
(2, 'freeCodeCamp.org', 'React Course - Beginner\'s Tutorial', 'https://www.youtube.com/watch?v=bMknfKXIFA8', 'This React tutorial by freeCodeCamp.org is perfect for beginners who want to learn React from scratch. The tutorial covers React basics such as setting up a development environment, creating components, managing state, and handling events. By following along with the tutorial, you\'ll build a solid foundation in React development.'),
(3, 'Traversy Media', 'React JS Crash Course', 'https://www.youtube.com/watch?v=w7ejDZ8SWv8', 'Traversy Media\'s React JS Crash Course is a quick introduction to React for developers who want to get up and running with React quickly. Brad Traversy covers essential React concepts such as components, props, state, and hooks. The course also includes a project where you\'ll build a simple task tracker application to apply what you\'ve learned.'),
(4, 'Academind', 'React Tutorial for Beginners', 'https://www.youtube.com/watch?v=SqcY0GlETPk', 'This React tutorial by Academind is designed for beginners who are new to React development. Maximilian Schwarzmüller, an experienced web developer and instructor, walks you through the basics of React, including JSX, components, props, state, and events. By the end of the tutorial, you\'ll have a solid understanding of React fundamentals.'),
(5, 'Academind', 'React Crash Course', 'https://www.youtube.com/watch?v=Dorf8i6lCuk', 'Academind\'s React Crash Course is a fast-paced introduction to React for developers who want to learn React quickly. Maximilian Schwarzmüller covers essential React concepts such as components, props, state, and hooks. The course also includes a project where you\'ll build a simple expense tracker application to practice your React skills.'),
(6, 'Programming with Mosh', 'React Tutorial', 'https://www.youtube.com/watch?v=Ke90Tje7VS0', 'This React tutorial by Programming with Mosh is perfect for developers who want to learn React from scratch. Mosh Hamedani covers React fundamentals such as components, props, state, and lifecycle methods. The tutorial also includes practical examples and exercises to help reinforce your learning.'),
(7, 'freeCodeCamp.org', 'React Course', 'https://www.youtube.com/watch?v=nTeuhbP7wdE', 'freeCodeCamp.org\'s React Course is a comprehensive introduction to React for beginners. The course covers React basics such as JSX syntax, components, props, state, and events. By following along with the course, you\'ll build a solid foundation in React development.'),
(8, 'freeCodeCamp.org', 'Learn React JS', 'https://www.youtube.com/watch?v=j942wKiXFu8', 'This Learn React JS tutorial by freeCodeCamp.org is designed for beginners who want to learn React from scratch. The tutorial covers React fundamentals such as JSX syntax, components, props, state, and events. By the end of the tutorial, you\'ll have a solid understanding of React basics.'),
(9, 'freeCodeCamp.org', 'Learn React - Full Course', 'https://www.youtube.com/watch?v=4UZrsTqkcW4', 'This full React course by freeCodeCamp.org covers everything you need to know to get started with React development. The course covers React basics such as components, props, state, and hooks, as well as more advanced topics like context and Redux. By following along with the course, you\'ll build several projects to apply what you\'ve learned.'),
(10, 'Academind', 'React Crash Course 2022', 'https://www.youtube.com/watch?v=8aGhZQkoFbQ', 'Academind\'s React Crash Course 2022 is an updated version of their popular React crash course. Maximilian Schwarzmüller covers essential React concepts such as components, props, state, hooks, and more. The course also includes a project where you\'ll build a simple weather application to practice your React skills.'),
(11, 'freeCodeCamp.org', 'Spring Boot Tutorial', 'https://www.youtube.com/watch?v=vtPkZShrvXQ', 'This Spring Boot tutorial by freeCodeCamp.org is perfect for beginners who want to learn how to build web applications with Spring Boot. The tutorial covers Spring Boot basics such as setting up a development environment, creating controllers, handling requests, and working with databases. By following along with the tutorial, you\'ll build a RESTful web service and a CRUD application.'),
(12, 'Java Brains', 'Spring Boot Quick Start', 'https://www.youtube.com/watch?v=35EQXmHKZYs', 'This Spring Boot Quick Start tutorial by Java Brains is designed to get you up and running with Spring Boot quickly. Koushik Kothagal covers essential Spring Boot concepts such as auto-configuration, starters, controllers, and repositories. By following along with the tutorial, you\'ll build a simple RESTful web service.'),
(13, 'Programming with Mosh', 'Spring Boot Tutorial', 'https://www.youtube.com/watch?v=vtPkZShrvXQ', 'This Spring Boot tutorial by Programming with Mosh is perfect for developers who want to learn how to build web applications with Spring Boot. Mosh Hamedani covers Spring Boot basics such as setting up a development environment, creating controllers, handling requests, and working with databases. By following along with the tutorial, you\'ll build a RESTful web service and a CRUD application.'),
(14, 'Amigoscode', 'Spring Boot Full Course', 'https://www.youtube.com/watch?v=9SGDpanrc8U', 'This Spring Boot Full Course by Amigoscode covers everything you need to know to get started with Spring Boot development. The course covers Spring Boot basics such as auto-configuration, starters, controllers, repositories, and services. By following along with the course, you\'ll build several projects to apply what you\'ve learned.');

-- --------------------------------------------------------

--
-- Table structure for table `course_details_seq`
--

CREATE TABLE `course_details_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_details_seq`
--

INSERT INTO `course_details_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `password`, `userid`, `username`, `role`) VALUES
(1, '123p', 'param_123', 'Paramdeep Singh', 'admin'),
(2, '123h', 'harjot_123', 'Harjot Singh', 'user'),
(3, '321a', 'akash001', 'akash', 'user'),
(7, 'asdfsf', 'asdfs', 'asfdd', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_seq`
--

CREATE TABLE `user_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_seq`
--

INSERT INTO `user_seq` (`next_val`) VALUES
(51);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course_details`
--
ALTER TABLE `course_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course_details`
--
ALTER TABLE `course_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
