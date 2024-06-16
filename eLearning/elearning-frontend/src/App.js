import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses';
import AdminLogin from './components/AdminLogin';
import CourseCrud from './components/CourseCrud';
import ViewCourse from './components/ViewCourse';
import CourseContentView from './components/CourseContentView';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all solid icons to the library
library.add(fas);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/addcourse" element={<CourseCrud />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/viewcourse/:id" element={<ViewCourse />} />
          <Route path="/coursecontentview/:id" element={<CourseContentView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
