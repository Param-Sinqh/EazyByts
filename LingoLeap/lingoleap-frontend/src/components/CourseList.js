import React, { useEffect, useState } from 'react';
import { getCoursesByInstructor } from '../services/api';

const CourseList = ({ instructorId }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCoursesByInstructor(instructorId).then(response => setCourses(response.data));
    }, [instructorId]);

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
