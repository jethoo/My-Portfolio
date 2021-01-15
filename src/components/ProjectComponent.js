import React from 'react';
import '../styles/ProjectStyle.css';

function Project() {
    return (
       
            <div className="container-fluid project-style" id="project">
                <div className="row ">
                    <div className="col-12">
                        <p className="projectHead">Personal Projects</p>
                    </div>
                </div>
               <div className="row " >
                   <div className="col-12 col-sm-12  col-lg-4" data-aos="flip-right">
                            <a href="https://master.dxzcnk7xe5xpa.amplifyapp.com/" target="_blank"><img src="/assets/images/3.png" className="project-img img-fluid"/></a>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                            <a href="http://3.133.13.20/" target="_blank"><img src="/assets/images/4.png" className="project-img img-fluid"/></a>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                            <a href="https://github.com/jethoo/ScrabblePointsGenerator" target="_blank"><img src="/assets/images/scrabbleJava.png" className="project-img img-fluid"/></a>
                    </div>
                </div>

            <div className="row " >
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                    <a href="https://github.com/jethoo/DineIn" target="_blank"><img src="/assets/images/dineIn.png" className="project-img img-fluid"/></a>
                </div>
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                    <a href="https://github.com/jethoo" target="_blank"><img src="/assets/images/1.png" className="project-img img-fluid"/></a>
                </div>
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                    <a href="https://limitless-forest-49423.herokuapp.com/" target="_blank"><img src="/assets/images/2.png" className="project-img img-fluid"/></a>
                </div>
            </div>
        </div>
       
    );
}

export default Project;