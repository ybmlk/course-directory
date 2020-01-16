import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

import CourseContainer from './courses/CourseContainer';
import NotFound from './NotFound';

// 'match' is a prop of <Rout> which contains information about how a route matched the URL
const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        {/* 
          'match.url' refers to the url of the function = '/courses' 
          incase the url/path of this function changes it dynamically updates
        */}
        <li><NavLink to={`${match.url}/html`}> HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div >

    <Switch>
      {/* only when the path is exactly '/courses' it redirects to '/courses/html' */}
      <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/html`} />} />
      <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />} />
      <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses} /> } />
      <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} /> } />
      <Route component={NotFound} />
    </Switch>
  </div >

);

export default Courses;