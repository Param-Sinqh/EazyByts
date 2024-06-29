import React, { useEffect, useState } from 'react';
import { getMaterialsByCourse } from '../services/api';

const CourseDetail = ({ courseId }) => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        getMaterialsByCourse(courseId).then(response => setMaterials(response.data));
    }, [courseId]);

    return (
        <div>
            <h2>Course Materials</h2>
            <ul>
                {materials.map(material => (
                    <li key={material.id}>{material.type}: <a href={material.url} target="_blank" rel="noopener noreferrer">{material.url}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetail;
