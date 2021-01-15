import React, { Component }from 'react';
import '../styles/TimeLineStyle.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Time extends Component {
    render(){
        return (
            <div className="container-fluid TimeStyle" id="time">
                        <div className="row">
                                <div class="col-md-12">
                                    <p className="certHead">Education</p>
                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(250, 235, 215)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Turku University Of Applied Sciences</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Turku, Finland</h4>
                                        <p>
                                        Started Bachelor's Degree in Information Technology
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(254, 120, 119)', color: '#fff' }}
                                        
                                    >
                                        <h3 className="vertical-timeline-element-title"></h3>
                                        <h4 className="vertical-timeline-element-subtitle">MTA Certification 98_366</h4>
                                        <p>
                                        Microsoft Certified in Networking Fundamentals
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(250, 235, 215)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title"></h3>
                                        <h4 className="vertical-timeline-element-subtitle">MTA Certification 98_349</h4>
                                        <p>
                                            Microsoft Certified in Windows Server Administration Fundamentals
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        iconStyle={{ background: 'rgb(254, 120, 119)', color: '#fff' }}
                                        
                                    >
                                        <h3 className="vertical-timeline-element-title"></h3>
                                        <h4 className="vertical-timeline-element-subtitle">MTA Certification 98_361</h4>
                                        <p>
                                            Microsoft Certified in Software Development Fundamentals(C#)
                                        </p>
                                    </VerticalTimelineElement>
                                    {/*<VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        iconStyle={{ background: 'rgb(250, 235, 215)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Nesc Oy</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Turku, Finland</h4>
                                        <p>
                                            Worked as trainee in IT support 
                                        </p>
                                    </VerticalTimelineElement> */}
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        iconStyle={{ background: 'rgb(254, 120, 119)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title"></h3>
                                        <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree Completion From TURKU UAS</h4>
                                        <p>
                                        Engineering Degree In Information Technology
                                        </p>
                                    </VerticalTimelineElement>
                                    
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work little-margin"
                                        iconStyle={{ background: 'rgb(250, 235, 215)', color: '#fff' }}
                                    >
                                        <h3 className="vertical-timeline-element-title">Georgian College</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Barrie, Ontario</h4>
                                        <p>
                                            Computer Programmer Co-op Diploma,
                                            Graduated, January, 2021
                                        </p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                        </div>
                </div>
            </div>
       );
    }
}


export default Time;








 

 
