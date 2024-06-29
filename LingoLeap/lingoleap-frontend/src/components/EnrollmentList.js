import React, { useEffect, useState } from 'react';
import { getEnrollmentsByStudent } from '../services/api';

const EnrollmentList = ({ studentId }) => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        getEnrollmentsByStudent(studentId).then(response => setEnrollments(response.data));
    }, [studentId]);

    return (
        <div>
            <h2>Enrollments</h2>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment.id}>{enrollment.course.title} - {enrollment.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentList;
