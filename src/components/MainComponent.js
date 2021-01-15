import React , { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import About from './AboutComponent';
import Tech from './TechComponent';
import Time from './TimeComponent';
import Project from './ProjectComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Current from './CurrentComponent';

class Main extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
}

    render(){
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

export default Main;