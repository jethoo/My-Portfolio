import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import HeaderComponent from './components/HeaderComponent';
import About from './components/AboutComponent';
import Tech from './components/TechComponent';
import Time from './components/TimeComponent';
import Project from './components/ProjectComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import Current from './components/CurrentComponent';

function initializeAnalytics(){
  ReactGA.initialize("UA-160880705-1");
  ReactGA.pageview("/App");
}


class App extends Component {
  render() {
    initializeAnalytics();
    return (
      <>
        <HeaderComponent />
        <About />
        <Current />
        <Time />
        <Tech />
        <Project />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
