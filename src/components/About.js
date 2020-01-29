import React from 'react';

const About = props => (
  <div className='main-content' id='about'>
    <h2 className='text-center'>{props.title}</h2>
    <p className='text-justify'>
      The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and
      more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit
      the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
      courses.
    </p>
  </div>
);

export default About;
