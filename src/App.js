import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Main from '../src/components/MainComponent';


function initializeAnalytics(){
  ReactGA.initialize("UA-160880705-1");
  ReactGA.pageview("/App");
}


class App extends Component {
  render() {
    initializeAnalytics();
    return (
     
            <div >
              <Main />
            </div>
       
    );
  }
}

export default App;
