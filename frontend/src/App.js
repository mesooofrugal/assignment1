import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <header>
        <Router>
        <div class="nav-container">
          <nav class='nav-bar'>
            <Link to="/studentList">Student List</Link>
            <Link to="/addStudent">Add Student</Link>
            <Link to="/addCourse">Add Course</Link>
          </nav>
        </div>
          <Routes>
          <Route path='/studentList' element={<StudentList/>}/>
          <Route path='/addStudent' element={<AddStudent/>}/>
          <Route path='/addCourse' element={<AddCourse/>}/>
          </Routes>
        </Router>
      </header>

    </div>
  );
}

export default App;