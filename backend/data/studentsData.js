module.exports = {
    students: [
      {
        id: 1,
        name: 'John Doe',
        department: 'Computer Science',
        semester: 2,
        coursesEnrolled: [101, 102],
        completedCourses: [{ courseId: 101, grade: 85 }, { courseId: 102, grade: 90 }]
      }
    ],
    ongoingCourses: [
      { id: 101, name: 'Math 101', department: 'Mathematics', isOpen: true },
      { id: 102, name: 'CS 101', department: 'Computer Science', isOpen: true }
    ]
  };
  