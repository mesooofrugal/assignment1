const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { students, ongoingCourses } = require('./data');
const { Student, OngoingCourse } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('frontend/build'));

// Route to get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Route to get all ongoing courses
app.get('/api/courses', (req, res) => {
    res.json(ongoingCourses);
});

// Route to get student details by ID and calculate average grade
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);

    if (student) {
        const avgGrade = student.calculateAverageGrade();
        res.json({ student, avgGrade });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Route to add a new ongoing course (POST)
app.post('/api/courses', (req, res) => {
    const { id, name, department, isOpen } = req.body;
    const newCourse = new OngoingCourse(id, name, department, isOpen);
    ongoingCourses.push(newCourse);
    res.status(201).json(newCourse);
});

// Route to add a new student (POST)
app.post('/api/students', (req, res) => {
    const { id, name, department, semester, coursesEnrolled, completedCourses } = req.body;
    const newStudent = new Student(id, name, department, semester, coursesEnrolled, completedCourses);
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Route to update an ongoing course (PUT)
app.put('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const course = ongoingCourses.find(c => c.id === courseId);

    if (course) {
        const { name, department, isOpen } = req.body;
        course.name = name;
        course.department = department;
        course.isOpen = isOpen;
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

// Route to update a student's enrolled or completed courses (PUT)
app.put('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);

    if (student) {
        const { coursesEnrolled, completedCourses } = req.body;
        student.coursesEnrolled = coursesEnrolled;
        student.completedCourses = completedCourses;
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Route to delete an ongoing course (DELETE)
app.delete('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const index = ongoingCourses.findIndex(c => c.id === courseId);

    if (index !== -1) {
        ongoingCourses.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

// Route to delete a student (DELETE)
app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const index = students.findIndex(s => s.id === studentId);

    if (index !== -1) {
        students.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
