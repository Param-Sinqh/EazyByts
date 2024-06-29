import React from 'react';
import Header from '../components/Header';
import CourseList from '../components/CourseList';
import EnrollmentList from '../components/EnrollmentList';

const Dashboard = ({ userId }) => (
    <div>
        <Header />
        <h1>Dashboard</h1>
        <CourseList instructorId={userId} />
        <EnrollmentList studentId={userId} />
    </div>
);

export default Dashboard;
