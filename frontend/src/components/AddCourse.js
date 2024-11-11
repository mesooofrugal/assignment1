import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = ({ onAddCourse }) => {
    const [course, setCourse] = useState({
        id: '',
        name: '',
        department: '',
        isOpen: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/courses', course);
        onAddCourse(response.data);
        setCourse({ id: '', name: '', department: '', isOpen: true });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = () => {
        setCourse(prev => ({
            ...prev,
            isOpen: !prev.isOpen
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Course</h2>
            <label>
                Course Name:
                <input type="text" name="name" value={course.name} onChange={handleChange} required />
            </label>
            <label>
                Department:
                <input type="text" name="department" value={course.department} onChange={handleChange} required />
            </label>
            <label>
                Open:
                <input type="checkbox" name="isOpen" checked={course.isOpen} onChange={handleCheckboxChange} />
            </label>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default AddCourse;
