import React, { useEffect, useState } from 'react';
import { getMaterialsByCourse } from '../services/api';

const MaterialList = ({ courseId }) => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        getMaterialsByCourse(courseId).then(response => setMaterials(response.data));
    }, [courseId]);

    return (
        <div>
            <h2>Materials</h2>
            <ul>
                {materials.map(material => (
                    <li key={material.id}>{material.type}: {material.url}</li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialList;
