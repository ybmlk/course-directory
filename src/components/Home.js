import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Featured from './Featured';

class Home extends Component {



  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
    let path = `/teachers/${teacherTopic}/${teacherName}`
    // this redirects to the 'path' when invoked
    this.props.history.push(path)
  }

  render() {
    return (
      <div className="main-content home" id="home">
        <h2 className=' text-center'>Front End Course Directory</h2>
        <p className='text-justify'>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p className='text-justify'>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p className='text-justify'>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <form onSubmit={this.handleSubmit}>
          {/* 'ref' takes a callback function that takes the DOM element as an argument */}
          <input type="text" placeholder="Name" ref={(input) => this.name = input} />
          <input type="text" placeholder="Topic" ref={(input) => this.topic = input} />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;