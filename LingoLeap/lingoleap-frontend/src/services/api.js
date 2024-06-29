import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const register = (user) => axios.post(`${API_URL}/users/register`, user);
export const createCourse = (course) => axios.post(`${API_URL}/courses`, course);
export const getCoursesByInstructor = (instructorId) => axios.get(`${API_URL}/courses/instructor/${instructorId}`);
export const getMaterialsByCourse = (courseId) => axios.get(`${API_URL}/materials/course/${courseId}`);
export const enroll = (enrollment) => axios.post(`${API_URL}/enrollments`, enrollment);
export const getEnrollmentsByStudent = (studentId) => axios.get(`${API_URL}/enrollments/student/${studentId}`);
