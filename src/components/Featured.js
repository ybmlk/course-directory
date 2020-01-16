import React from 'react';
import TeacherList from '../data/teachers';


const Featured = ({ match }) => {
  let name = match.params.name
  let topic = match.params.topic
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong> {topic} </strong>!</p>
    </div>
  );
}

export default Featured;