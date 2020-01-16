import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';


// App component
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';


const App = () => (
  // using 'HashRouter' insted of 'BrowserRouter' keeps the link in sync when refreshed
  <HashRouter>
    <div className="container">
      <Header />

      {/* 'switch' the first matching path it finds else renders the last 'NotFound' */}
      <Switch>
        {/* 'exact path' means reander the 'Home' page only when '/'  */}
        <Route exact path="/" component={Home} />
        {/* if you want to pass props use 'render' insted of 'components' */}
        <Route path="/about" render={() => <About title="About" />} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        {/* rendres if no matching path */}
        <Route component={NotFound} />
      </Switch>

    </div>
  </HashRouter>
);

export default App;