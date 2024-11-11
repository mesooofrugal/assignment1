const { Student, OngoingCourse } = require('./models');

let students = [
    new Student(1, 'John Doe', 'Computer Science', 'Spring 2024', ['Math 101'], [
        { courseId: 'Math 101', grade: 85 },
    ]),
    new Student(2, 'Jane Smith', 'Mechanical Engineering', 'Fall 2024', ['Physics 101'], [
        { courseId: 'Physics 101', grade: 90 },
    ])
];

let ongoingCourses = [
    new OngoingCourse(1, 'Math 101', 'Computer Science', true),
    new OngoingCourse(2, 'Physics 101', 'Mechanical Engineering', false),
];

module.exports = { students, ongoingCourses };
