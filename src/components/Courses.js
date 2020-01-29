import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

import CourseContainer from './courses/CourseContainer';
import NotFound from './NotFound';

// 'match' is a prop of <Rout> which contains information about how a route matched the URL
class Courses extends Component {
  displayCourse = e => {
    const courseList = document.getElementById('course-list').childNodes;
    Array.from(courseList).forEach(course => (course.style.display = 'none'));
    const courseName = e.target.innerText.toLowerCase();
    document.getElementById(courseName).style.display = '';
  };

  // display HTML course only when it first loads
  displayHtml = () => {
    const courseList = document.getElementById('course-list').childNodes;
    Array.from(courseList).forEach(course => (course.style.display = 'none'));
    document.getElementById('html').style.display = '';
  };

  componentDidMount() {
    this.displayHtml();
  }

  render() {
    return (
      <div className='main-content courses' id='courses'>
        <h2 className='text-center'>Courses</h2>
        <div className='course-header group'>
          <ul className='course-nav'>
            <li>
              <button className='btn btn-primary' onClick={this.displayCourse}>
                HTML
              </button>
            </li>
            <li>
              <button onClick={this.displayCourse}>CSS</button>
            </li>
            <li>
              <button onClick={this.displayCourse}>JavaScript</button>
            </li>
          </ul>
        </div>
        <div id='course-list'>
          <CourseContainer data={HTMLCourses} title={'html'} />
          <CourseContainer data={CSSCourses} title={'css'} />
          <CourseContainer data={JSCourses} title={'javascript'} />
        </div>

        {/* <Route component={NotFound} /> */}
      </div>
    );
  }
}

export default Courses;
