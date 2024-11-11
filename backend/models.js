class Student {
    constructor(id, name, department, semester, coursesEnrolled = [], completedCourses = []) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.semester = semester;
        this.coursesEnrolled = coursesEnrolled;
        this.completedCourses = completedCourses;
    }

    // Method to calculate average grades (assuming each course has a grade)
    calculateAverageGrade() {
        if (this.completedCourses.length === 0) return 0;

        const totalGrade = this.completedCourses.reduce((acc, course) => acc + course.grade, 0);
        return totalGrade / this.completedCourses.length;
    }
}

class OngoingCourse {
    constructor(id, name, department, isOpen) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.isOpen = isOpen;
    }
}

module.exports = { Student, OngoingCourse };
