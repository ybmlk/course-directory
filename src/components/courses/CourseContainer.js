import React from 'react';
import Course from './Course';

const CourseContainer = ({ data, title }) => {
  let courses = data.map(courses => {
    return (
      <Course
        title={courses.title}
        desc={courses.description}
        img={courses.img_src}
        key={courses.id}
      />
    );
  });
  return (
    <div id={title}>
      <ul>{courses}</ul>
    </div>
  );
};

export default CourseContainer;
