import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import '../styles/AboutStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    AOS.init();

    return (
       
            <div className="container-fluid" data-aos="fade-up" id="/about">
                <div className="row ">
                        <div className="col-10 ">
                           <Card className="aboutCard">
                              <CardBody>
                              <CardTitle className="abtTitle">About Me</CardTitle>
                                       <CardText>
                                            Hi, My name is Jeewan Bhusal. I am originally from Nepal.
                                            I am a recent graduate of Georgian College, Barrie.
                                            I graduated in January,2021. Currently, I am looking for entry level roles in Software Development.
                                        </CardText> 
                                </CardBody> 
                            </Card> 
                        </div>
                </div>
                </div>
       
    );
}

export default About;