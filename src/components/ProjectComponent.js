/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../styles/ProjectStyle.css';

function Project() {
    return (
       
            <div className="container-fluid project-style" id="/project">
                <div className="row ">
                    <div className="col-12">
                        <p className="projectHead">Personal Projects</p>
                    </div>
                </div>
               <div className="row " >
                   <div className="col-12 col-sm-12  col-lg-4" data-aos="flip-right">
                            <a href="https://master.dxzcnk7xe5xpa.amplifyapp.com/"><img src="/assets/images/3.png" className="project-img img-fluid" alt="work"/></a>
                            <a href="https://github.com/jethoo/HackerNewsClone"><button className="btn-info">Source Code</button></a>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                            <img src="/assets/images/4.png" className="project-img img-fluid" alt="work"/>
                            <a href="https://github.com/jethoo/movie_review"><button className="btn-info">Source Code</button></a>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                            <img src="/assets/images/scrabbleJava.png" className="project-img img-fluid" alt="work"/>
                            <a href="https://github.com/jethoo/ScrabblePointsGenerator"><button className="btn-info">Source Code</button></a>
                    </div>
                </div>

            <div className="row " >
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                    <img src="/assets/images/swift.png" className="project-img img-fluid" alt="work"/>
                    <a href="https://github.com/jethoo/RealState_IOS_APP"><button className="btn-info">Source Code</button></a>
                </div>
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                   <img src="/assets/images/dineIn.png" className="project-img img-fluid" alt="work"/>
                <a href="https://github.com/jethoo/DineIn"><button className="btn-info">Source Code</button></a>
                </div>
                <div className="col-12 col-sm-12 col-lg-4" data-aos="flip-right">
                    <img src="/assets/images/swift.png" className="project-img img-fluid" alt="work"/>
                    <a href="https://github.com/jethoo/SimpleSwiftTableView"><button className="btn-info">Source Code</button></a>
                </div>
            </div>
       
        </div>
       
    );
}

export default Project;