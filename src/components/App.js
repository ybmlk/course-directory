import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';

// App component
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <div className='container'>
    <Header />
    <div className='inner-container'>
      <Home />
      <About title='About' />
      <Teachers />
      {/* <Route path='/:topic/:name' component={Featured} /> */}
      <Courses />
    </div>
  </div>
);

export default App;
