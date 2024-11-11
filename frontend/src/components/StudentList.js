import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = ({ studentId }) => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            const response = await axios.get(`http://localhost:3000/api/students/${studentId}`);
            setStudent(response.data);
        };

        fetchStudent();
    }, [studentId]);

    if (!student) return <div>Loading...</div>;

    return (
        <div>
            <h2>{student.student.name} Details</h2>
            <p>Department: {student.student.department}</p>
            <p>Semester: {student.student.semester}</p>
            <h3>Completed Courses</h3>
            <ul>
                {student.student.completedCourses.map(course => (
                    <li key={course.courseId}>
                        {course.courseId} - Grade: {course.grade}
                    </li>
                ))}
            </ul>
            <h3>Average Grade: {student.avgGrade}</h3>
        </div>
    );
};

export default StudentList;