import React from 'react';
import '../styles/FooterStyle.css';
import { Button } from 'reactstrap';


function Footer() {
    return (
        <div className="container-fluid footer-style">
           <div className="row">
                <div className="col-12">
                    <a href="#header"><Button className="back">Back To Top</Button></a>
                </div>
                <div className="col-12">
                    <p className="learn-more">If you'd like to learn more about me, feel free to add me on one or all of the following sites.</p>
                    <a href="https://www.linkedin.com/in/jeewanbhusal/" target="_blank"><Button className="social">LinkedIn</Button></a>
                    <a href="https://twitter.com/jeewan_bhusal" target="_blank"><Button className="social">Twitter</Button></a>
                    <a href="https://github.com/jethoo" target="_blank"><Button className="social">GitHub</Button></a>
                    <a href="https://www.facebook.com/jeewan21" target="_blank"><Button className="social">Facebook</Button></a>

                   
                </div>
           </div>
           <div className="row">
                <div className="col-md-3">
                    <div className="address">
                        <span className="fa fa-lg fa-map-marker"></span>
                        <p>Brampton, Ontario</p>
                    </div>
                </div>
                <div className="col-md-3"></div>
                
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="phone">
                        <span className="fa fa-lg fa-phone" ></span>
                        <p>+1-905-965-4201</p>
                    </div>
                </div>
               
           </div>
           <div className="row">
                <div className="col-12">
                <p className="madeBy"><span className="fa fa-copyright"></span>  Made with  <span className="fa fa-heart"></span>  By Jeewan Bhusal</p>
                </div>
           </div>
        </div>
    );
}

export default Footer;






