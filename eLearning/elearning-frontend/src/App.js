import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'; // Updated import statement
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import AdminLogin from './components/AdminLogin';
import CourseCrud from './components/CourseCrud';
import ViewCourse from './components/ViewCourse';
// import ManageCourses from './components/Courses';


const App = () => {
  return (


    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/addcourse" element={<CourseCrud />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/viewcourse/:id" element={<ViewCourse />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
